import { Fragment, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useEvent } from "hooks/useEvent";
import { useEventUserSlots } from "hooks/slots/useEventUserSlots";
import { BoardingPass, BoardingPassType } from "components/boarding/BoardingPass";
import { SlotPageHeader } from "components/slots/SlotPageHeader";
import { UserSlotsSideInfos } from "components/slots/UserSlotsSideInfos";
import { LoadingIndicator } from "components/LoadingIndicator/LoadingIndicator";
import { ActionButton } from "components/button/Button";
import { useAuthData } from "hooks/useAuthData";
import { BookingStatus, Slot, SlotBookActions } from "types/Slot";
import { useSlotBookMutation } from "hooks/slots/useSlotBookMutation";
import { useAirportInfoFromSlots } from "hooks/slots/useAirportInfoFromSlots";
import { AirportDetails } from "types/AirportDetails";
import { useFlatInfiniteData } from "hooks/useFlatInfiniteData";
import { useText } from "hooks/useText";

export default function UserSlots() {
    const [searchedFlightNumber, setSearchedFlightNumber] = useState<string | null>(null);

    const { eventId } = useParams();
    const { data: event, isLoading: isLoadingEvent } = useEvent(Number(eventId));
    const { data: user, isLoading: isLoadingUser } = useAuthData();
    const scheduleConfirmMutation = useSlotBookMutation(SlotBookActions.CONFIRM);
    const scheduleCancelMutation = useSlotBookMutation(SlotBookActions.CANCEL);
    const navigate = useNavigate();
    const { t } = useText();

    const {
        data: slots,
        isLoading: isLoadingSlots,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage
    } = useEventUserSlots(Number(eventId), searchedFlightNumber);

    const tableData = useFlatInfiniteData(slots);

    useEffect(() => {
        if (scheduleConfirmMutation.isSuccess) {
            navigate("/slot/confirmed", {
                state: {
                    eventId: scheduleConfirmMutation.variables?.eventId
                },
                replace: true
            });
        }
    }, [scheduleConfirmMutation.isSuccess, scheduleConfirmMutation.variables, navigate]);

    useEffect(() => {
        if (scheduleCancelMutation.isSuccess) {
            navigate("/slot/cancelled", {
                state: {
                    eventId: scheduleCancelMutation.variables?.eventId
                },
                replace: true
            });
        }
    }, [scheduleCancelMutation.isSuccess, scheduleCancelMutation.variables, navigate]);

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

    const isLoadingAnyAirportData = useMemo(() => {
        return airportDetailsQueries.some((airportQuery) => {
            return airportQuery.isLoading;
        });
    }, [airportDetailsQueries]);


    const onScheduleConfirm = (slot: Slot) => {
        scheduleConfirmMutation.mutate({ slotId: slot.id, eventId: Number(eventId) });
    }

    const onScheduleCancel = (slot: Slot) => {
        // eslint-disable-next-line no-restricted-globals
        confirm(t('myFlights.boardingPass.cancelFlightConfirmation')) && scheduleCancelMutation.mutate({ slotId: slot.id, eventId: Number(eventId) });
    }

    const onFlightSearch = (flightNumber: string) => {
        setSearchedFlightNumber(flightNumber);
    }

    const getAirportShortName = (airportDetails: AirportDetails) => {
        let airportName = airportDetails.name;

        // Initially the HQ API returns the airport name in the format:
        // São Paulo/Guarulhos / Governador André Franco Montoro Intl
        if (airportName.indexOf(" / ") !== -1) {
            const [airportShortName] = airportName.split(" / ");
            airportName = airportShortName;
        }

        return airportName;
    };

    if ((isLoadingEvent || isLoadingUser || isLoadingSlots)
        || (scheduleConfirmMutation.isLoading || scheduleCancelMutation.isLoading)
        || (isLoadingAnyAirportData)
        || (!event || !user)) {
        return (
            <LoadingIndicator />
        );
    }

    const availableActions = (slot: Slot) => {
        if (event.has_ended) {
            return null;
        }

        const cancelFlightAction = (
            <ActionButton
                backgroundColor="bg-red"
                content={
                    <span className="block w-full px-8 py-2.5 text-xs text-center font-header font-bold text-white truncate">
                        { t('myFlights.boardingPass.cancelFlight') }
                    </span>
                }
                height="h-8"
                onClick={() => onScheduleCancel(slot)}
            />
        );

        if (slot.bookingStatus === BookingStatus.BOOKED) {
            return (
                <>
                    {cancelFlightAction}
                </>
            )
        } else if (event.can_confirm_slots) {
            return (
                <>
                    {cancelFlightAction}

                    <ActionButton
                        content={
                            <span className="block w-full px-8 py-2.5 text-xs text-center font-header font-bold text-white truncate">
                                { t('myFlights.boardingPass.confirmFlight') }
                            </span>
                        }
                        height="h-8"
                        onClick={() => onScheduleConfirm(slot)}
                    />
                </>
            )
        } else {
            return (
                <>
                    <ActionButton
                        backgroundColor="bg-red"
                        content={
                            <span className="block w-full px-8 py-2.5 text-xs text-center font-header font-bold text-white truncate">
                                { t('myFlights.boardingPass.cancelFlight') }
                            </span>
                        }
                        height="h-8"
                        onClick={() => onScheduleCancel(slot)}
                    />
                    <ActionButton
                        backgroundColor="bg-[#4C4C4C]"
                        content={
                            <span className="block w-full px-8 py-2.5 text-xs text-center font-header font-bold text-white/20 truncate">
                                { t('myFlights.boardingPass.waitToConfirm') }
                            </span>
                        }
                        height="h-8"
                        disabled
                    />
                </>
            )
        }
    }

    return (
        <div className="flex flex-col lg:flex-row h-full">
            <UserSlotsSideInfos pilotBriefing={event.pilotBriefing} />

            <div className="flex-1 lg:max-h-screen w-full bg-[#F7F7F7] dark:bg-dark-gray-2">
                <SlotPageHeader
                    showFilter={false}
                    searchedFlightNumber={searchedFlightNumber}
                    onFlightSearch={onFlightSearch}
                />
                <div className="h-screen lg:h-slot-table lg:mt-5 overflow-auto scrollbar-thin scrollbar-thumb-light-gray-5 dark:scrollbar-thumb-black scrollbar-thumb-rounded">
                    <div className="max-w-[62rem] mx-auto">
                        <div className="space-y-5">
                            {slots?.pages.map(slotPage => (
                                <Fragment key={slotPage.page}>
                                    {slotPage.data.map((slot) => {
                                        const originDetails = airportDetailsMap[slot.origin];
                                        const destinationDetails = airportDetailsMap[slot.destination];

                                        return (
                                            <Fragment key={slot.id}>
                                                <BoardingPass
                                                    user={{ firstName: user.firstName, lastName: user.lastName, vid: user.vid }}
                                                    origin={{ name: getAirportShortName(originDetails), iata: originDetails.iata }}
                                                    destination={{ name: getAirportShortName(destinationDetails), iata: destinationDetails.iata }}
                                                    callsign={slot.flightNumber}
                                                    slotDate={slot.slotTime}
                                                    gate={slot.gate}
                                                    type={slot.type === "takeoff" ? BoardingPassType.DEPARTURE : BoardingPassType.ARIVAL}
                                                    eventStartDate={new Date(event.dateStart)}
                                                    actions={(
                                                        <div className="flex gap-4">
                                                            {availableActions(slot)}
                                                        </div>
                                                    )} />
                                            </Fragment>
                                        );
                                    })}
                                </Fragment>
                            ))}
                        </div>
                        {hasNextPage && (
                            <div className="flex justify-center mt-8">
                                {isFetchingNextPage
                                    ? (
                                        <div className="relative">
                                            <LoadingIndicator />
                                        </div>
                                    )
                                    : (
                                        <ActionButton content="Ver mais itens" backgroundFilled={false} onClick={() => fetchNextPage()} />
                                    )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
