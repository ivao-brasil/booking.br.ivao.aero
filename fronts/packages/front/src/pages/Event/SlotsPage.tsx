import { FilterState } from "components/filter/Filter";
import { LoadingIndicator } from "components/LoadingIndicator/LoadingIndicator";
import { BookInfoMessage } from "components/slots/BookInfoMessage";
import { SlotPageHeader } from "components/slots/SlotPageHeader";
import { SlotsTable } from "components/slots/SlotsTable";
import { SlotTypeFilter } from "components/slots/SlotTypeFilter";
import { useAirlineLogosFromSlots } from "hooks/slots/useAirlineLogosFromSlots";
import { useEventSlots } from "hooks/slots/useEventSlots";
import { useEvent } from "hooks/useEvent";
import { useEffect, useMemo, useState } from "react";
import { createSearchParams, ParamKeyValuePair, useLocation, useNavigate, useParams } from "react-router-dom";
import { PrivateSlotScheduleData, Slot } from "types/Slot";
import { SlotTypeOptions } from "types/SlotFilter";

interface LocationState {
    hasError?: boolean;
}

export default function SlotsPage() {
    const [selectedSlotType, setSelectedSlotType] = useState<SlotTypeOptions | null>(SlotTypeOptions.LANDING);
    const [hasBookingRequestError, setHasBookingRequestError] = useState(false);
    const [searchedFlightNumber, setsearchedFlightNumber] = useState<string | null>(null);
    const [appliedFilters, setAppliedFilters] = useState<Partial<FilterState>>({});

    const { eventId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const { data: event, isLoading: isLoadingEvent } = useEvent(Number(eventId));
    const {
        data: slots,
        isLoading: isLoadingSlots,
        hasNextPage, isFetchingNextPage, fetchNextPage
    } = useEventSlots(Number(eventId), selectedSlotType, searchedFlightNumber, appliedFilters);

    const tableData = useMemo(() => {
        if (!slots) {
            return null;
        }

        const allPagesData = slots.pages.map(slotPage => slotPage.data.map(slot => slot));
        return ([] as Slot[]).concat(...allPagesData);
    }, [slots]);

    useEffect(() => {
        const locationState = location.state as LocationState | null;
        if (locationState?.hasError) {
            setHasBookingRequestError(true);
            window.history.replaceState({ hasError: false }, '');
        }
    }, [location.state]);

    const airlineLogoQueries = useAirlineLogosFromSlots(tableData || [] as Slot[]);
    const airlineLogos = useMemo(() => {
        return airlineLogoQueries.map(queryResult => queryResult.data || null);
    }, [airlineLogoQueries]);

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
        setsearchedFlightNumber(null);
    }

    const onFlightSearch = (flightNumber: string) => {
        setSelectedSlotType(null);
        setsearchedFlightNumber(flightNumber);
    }

    const onSlotFilter = (filterState: Partial<FilterState>) => {
        setAppliedFilters(filterState);
    }

    if (isLoadingEvent || isLoadingSlots || !event) {
        return (
            <LoadingIndicator />
        )
    }

    return (
        <div className="flex flex-col md:flex-row h-full">
            <div className="md:max-w-[18rem]">
                <SlotTypeFilter
                    eventName={event.eventName}
                    eventType={event.type}
                    selectedSlotType={selectedSlotType}
                    onSlotTypeChange={onSlotTypeChange} />
            </div>

            <div className="flex-1 md:max-h-screen w-full bg-[#F7F7F7] dark:bg-dark-gray-2">
                <SlotPageHeader
                    appliedFilters={appliedFilters}
                    searchedFlightNumber={searchedFlightNumber}
                    onFlightSearch={onFlightSearch}
                    onFilterChange={onSlotFilter}
                />
                {hasBookingRequestError
                    ? (
                        <BookInfoMessage
                            header="Não foi possível agendar esse voo..."
                            description="Esses dados podem não existir no nosso sistema ou já foram reservados por outro piloto."
                            type="error"
                            onErrorReset={() => setHasBookingRequestError(false)}
                        />
                    )
                    : (
                        <>
                            <div className="relative overflow-x-auto h-screen lg:h-slot-table lg:mt-5 lg:scrollbar-thin lg:scrollbar-thumb-light-gray-5 lg:dark:scrollbar-thumb-black lg:scrollbar-thumb-rounded">
                                <div className="mx-2 md:ml-8 md:mr-4">
                                    {tableData?.length
                                        ? (
                                            <SlotsTable
                                                slots={tableData}
                                                airlineImages={airlineLogos}
                                                onSlotBook={onSlotBook}
                                                hasMoreFlights={hasNextPage}
                                                isFecthingMoreFlights={isFetchingNextPage}
                                                onMoreFlightsRequested={() => fetchNextPage()}
                                            />
                                        )
                                        : (
                                            <BookInfoMessage
                                                header="Parece que já não há mais nada para você aqui..."
                                                description="Esses dados podem não existir no nosso sistema, verifique os filtros aplicados ou tente novamente mais tarde. "
                                                type="warning"
                                                onErrorReset={() => {
                                                    setAppliedFilters({});
                                                    setsearchedFlightNumber(null);
                                                    setSelectedSlotType(SlotTypeOptions.LANDING)
                                                }}
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