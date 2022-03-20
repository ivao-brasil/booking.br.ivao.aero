import { FilterState } from "components/filter/Filter";
import { LoadingIndicator } from "components/LoadingIndicator/LoadingIndicator";
import { BookInfoMessage } from "components/slots/BookInfoMessage";
import { SlotPageHeader } from "components/slots/SlotPageHeader";
import { SlotsTable } from "components/slots/SlotsTable";
import { SlotTypeFilter } from "components/slots/SlotTypeFilter";
import { useAirlineLogosFromSlots } from "hooks/slots/useAirlineLogosFromSlots";
import { useAirportInfoFromSlots } from "hooks/slots/useAirportInfoFromSlots";
import { useEventSlots } from "hooks/slots/useEventSlots";
import { useSlotCountByType } from "hooks/slots/useSlotCountByType";
import { useEvent } from "hooks/useEvent";
import { useFlatInfiniteData } from "hooks/useFlatInfiniteData";
import { useText } from "hooks/useText";
import { useEffect, useMemo, useState } from "react";
import { createSearchParams, ParamKeyValuePair, useLocation, useNavigate, useParams } from "react-router-dom";
import { AirportDetails } from "types/AirportDetails";
import { PrivateSlotScheduleData, Slot } from "types/Slot";
import { SlotTypeOptions } from "types/SlotFilter";
import { Translations } from "types/Translations";

export interface SlotsPageLocationState {
    hasError?: boolean;
    errorMessage?: string;
}

interface SlotBookError {
    hasError: boolean;
    errorMessage?: string;
}

const DEFAULT_SELECTED_SLOT_TYPE = SlotTypeOptions.LANDING;

export default function SlotsPage() {
    const [selectedSlotType, setSelectedSlotType] = useState<SlotTypeOptions | null>(DEFAULT_SELECTED_SLOT_TYPE);
    const [scheduleRequest, setBookingRequestError] = useState<SlotBookError>({ hasError: false });
    const [appliedFilters, setAppliedFilters] = useState<Partial<FilterState>>({});
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const { t } = useText();

    let { eventId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const { data: event, isLoading: isLoadingEvent } = useEvent(Number(eventId));

    const {
        data: slots,
        isLoading: isLoadingSlots,
        hasNextPage, isFetchingNextPage, fetchNextPage
    } = useEventSlots(Number(eventId), selectedSlotType, appliedFilters);

    const tableData = useFlatInfiniteData(slots);

    const slotCountByType = useSlotCountByType(Number(eventId));

    useEffect(() => {
        const locationState = location.state as SlotsPageLocationState | null;

        if (!locationState) {
            return;
        }

        if (locationState.hasError) {
            setBookingRequestError({ hasError: true, errorMessage: locationState.errorMessage });
            setSelectedSlotType(null);
            window.history.replaceState({ hasError: false, errorMessage: null }, '');
        }
    }, [location.state]);

    const airlineLogoQueries = useAirlineLogosFromSlots(tableData || [] as Slot[]);

    const airlineLogos = useMemo(() => {
        return airlineLogoQueries.map(queryResult => queryResult.data || null);
    }, [airlineLogoQueries]);

    const airportDetailsQueries = useAirportInfoFromSlots(tableData || [] as Slot[]);

    const airportDetailsMap = useMemo(() => {
        const result: Record<string, AirportDetails> = {};

        airportDetailsQueries.forEach(queryResult => {
            const { data } = queryResult;

            if (!data) {
                return;
            }

            result[data.icao] = data;
        });

        return result;
    }, [airportDetailsQueries]);

    const clearFlightNumberSearch = () => {
        setAppliedFilters(prevFilters => {
            const updatedFilters = {...prevFilters};
            delete updatedFilters.flightNumber;
            return updatedFilters;
        });
    }

    const onSlotBook = (slotId: number, slotData?: PrivateSlotScheduleData) => {
        const scheduleUrl = `/event/${eventId}/schedule/${slotId}`;
        if (slotData) {
            const urlInitSlotData = Object.entries(slotData).map(([key, value]) => [String(key), value]) as ParamKeyValuePair[];
            const schedulingUrlParams = createSearchParams(urlInitSlotData);
            navigate(`${scheduleUrl}?${schedulingUrlParams.toString()}`);
        } else {
            navigate(scheduleUrl);
        }
    }

    const onSlotTypeChange = (newType: SlotTypeOptions) => {
        setSelectedSlotType(newType);
        clearFlightNumberSearch();
    }

    const onFlightSearch = (flightNumber: string) => {
        if (flightNumber === "") {
            clearFlightNumberSearch();
            setSelectedSlotType(DEFAULT_SELECTED_SLOT_TYPE);
            return;
        }

        setSelectedSlotType(null);
        setAppliedFilters({ flightNumber });
        setBookingRequestError({ hasError: false, errorMessage: undefined });
    }

    const onFilterStateChange = (filterState: Partial<FilterState>, filterKeyCount: number) => {
        setAppliedFilters(filterState);

        if (filterKeyCount === 0 && selectedSlotType === null) {
            setSelectedSlotType(DEFAULT_SELECTED_SLOT_TYPE);
        }
    }

    const onScheduleErrorReset = () => {
        setBookingRequestError({ hasError: false, errorMessage: undefined });
        setAppliedFilters({});
        setSelectedSlotType(DEFAULT_SELECTED_SLOT_TYPE);
    }

    const scrollBarClassName = "lg:h-slot-table lg:mt-5 lg:scrollbar-thin lg:scrollbar-thumb-light-gray-5 lg:dark:scrollbar-thumb-black lg:scrollbar-thumb-rounded";

    if (isLoadingEvent || isLoadingSlots || !event) {
        return (
            <LoadingIndicator />
        )
    }

    return (
        <div className="flex flex-col lg:flex-row h-full">
            <div className="lg:max-w-[18rem]">
                <SlotTypeFilter
                    eventName={event.eventName}
                    eventBanner={event.banner}
                    eventType={event.type}
                    selectedSlotType={selectedSlotType}
                    showPriveSlots={event.privateSlots === 1}
                    slotsQtdData={{
                        departure: slotCountByType.data?.departure,
                        landing: slotCountByType.data?.landing,
                        private: slotCountByType.data?.private
                     }}
                    onSlotTypeChange={onSlotTypeChange} />
            </div>

            <div className="flex-1 lg:max-h-screen w-full bg-[#F7F7F7] dark:bg-dark-gray-2">
                <SlotPageHeader
                    appliedFilters={appliedFilters}
                    searchedFlightNumber={appliedFilters.flightNumber}
                    onFlightSearch={onFlightSearch}
                    onFilterChange={onFilterStateChange}
                    onFilterStateChange={(state) => setIsFilterOpen(state)}
                    showFilter={!scheduleRequest.hasError}
                />
                {scheduleRequest.hasError
                    ? (
                        <BookInfoMessage
                            header={t('flights.error.unableToBook.title')}
                            description={t([
                                `errors.${scheduleRequest.errorMessage}` as unknown as keyof Translations,
                                'flights.error.unableToBook.subtitle'
                            ])}
                            type="error"
                            onErrorReset={() => onScheduleErrorReset()}
                        />
                    )
                    : (
                        <>
                            <div
                                className={`relative overflow-x-auto h-screen ${scrollBarClassName} ${isFilterOpen ? "blur" : ""}`}
                            >
                                <div className="mx-2 lg:ml-8 lg:mr-4">
                                    {tableData?.length
                                        ? (
                                            <SlotsTable
                                                slots={tableData}
                                                airlineImages={airlineLogos}
                                                onSlotBook={onSlotBook}
                                                hasMoreFlights={hasNextPage}
                                                isFecthingMoreFlights={isFetchingNextPage}
                                                airportDetailsMap={airportDetailsMap}
                                                onMoreFlightsRequested={() => fetchNextPage()}
                                            />
                                        )
                                        : (
                                            <BookInfoMessage
                                                header={ t('flights.error.noFlightsFound.title') }
                                                description={ t('flights.error.noFlightsFound.subtitle') }
                                                type="warning"
                                                onErrorReset={() => onScheduleErrorReset()}
                                            />
                                        )}
                                </div>
                            </div>
                        </>
                    )}
            </div>
        </div>
    );
}