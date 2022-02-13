import { Fragment, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useEvent } from "hooks/useEvent";
import { useEventUserSlots } from "hooks/slots/useEventUserSlots";
import { BoardingPass, BoardingPassType } from "components/boarding/BoardingPass";
import { SlotPageHeader } from "components/slots/SlotPageHeader";
import { UserSlotsSideInfos } from "components/slots/UserSlotsSideInfos";
import { LoadingIndicator } from "components/LoadingIndicator";
import { ActionButton } from "components/button/Button";
import { useAuthData } from "hooks/useAuthData";
import { BookingStatus, Slot, SlotBookActions } from "types/Slot";
import { FLIGHT_CONFIRM_MIN_DAYS, ONE_DAY } from "appConstants";
import { useSlotBookMutation } from "hooks/slots/useSlotBookMutation";

export default function UserSlots() {
    const { eventId } = useParams();
    const { data: event, isLoading: isLoadingEvent } = useEvent(Number(eventId));
    const { data: slots, isLoading: isLoadingSlots, hasNextPage, isFetchingNextPage, fetchNextPage } = useEventUserSlots(Number(eventId));
    const { data: user, isLoading: isLoadingUser } = useAuthData();
    const scheduleConfirmMutation = useSlotBookMutation(SlotBookActions.CONFIRM);
    const scheduleCancelMutation = useSlotBookMutation(SlotBookActions.CANCEL);
    const navigate = useNavigate();

    const canConfirmFlights = useMemo(() => {
        if (!event) {
            return false;
        }

        const today = new Date();
        const slotStartDate = new Date(event.dateStart);

        const dateDeltaMs = slotStartDate.getTime() - today.getTime();

        if (dateDeltaMs < 0) {
            // The event has already started
            return false;
        }

        const dateDeltaDays = dateDeltaMs / ONE_DAY;
        return FLIGHT_CONFIRM_MIN_DAYS > dateDeltaDays;
    }, [event]);

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

    const onScheduleConfirm = (slot: Slot) => {
        scheduleConfirmMutation.mutate({ slotId: slot.id, eventId: Number(eventId) });
    }

    const onScheduleCancel = (slot: Slot) => {
        scheduleCancelMutation.mutate({ slotId: slot.id, eventId: Number(eventId) });
    }

    if (isLoadingEvent || isLoadingUser || isLoadingSlots
        || scheduleConfirmMutation.isLoading || scheduleCancelMutation.isLoading
        || !event || !user) {
        return (
            <LoadingIndicator />
        );
    }

    const availableActions = (slot: Slot) => {
        const cancelFlightAction = (
            <ActionButton
                backgroundColor="bg-red"
                content={
                    <span className="block w-full px-8 py-2.5 text-xs text-center font-header font-bold text-white truncate">
                        Cancelar voo
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
        } else if (canConfirmFlights) {
            return (
                <>
                    {cancelFlightAction}

                    <ActionButton
                        content={
                            <span className="block w-full px-8 py-2.5 text-xs text-center font-header font-bold text-white truncate">
                                Confirmar voo
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
                        backgroundColor="bg-[#4C4C4C]"
                        content={
                            <span className="block w-full px-8 py-2.5 text-xs text-center font-header font-bold text-white/20 truncate">
                                Aguarde para confirmar o voo
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
        <div className="flex flex-col md:flex-row h-full">
            <UserSlotsSideInfos pilotBriefing={event.pilotBriefing} />

            <div className="flex-1 md:max-h-screen w-full bg-[#F7F7F7] dark:bg-dark-gray-2">
                <SlotPageHeader showFilter={false} />
                <div className="h-screen lg:h-slot-table lg:mt-5 overflow-auto scrollbar-thin scrollbar-thumb-light-gray-5 dark:scrollbar-thumb-black scrollbar-thumb-rounded">
                    <div className="max-w-[62rem] mx-auto">
                        <div className="space-y-5">
                            {slots?.pages.map(slotPage => (
                                <Fragment key={slotPage.page}>
                                    {slotPage.data.map((slot) => (
                                        <Fragment key={slot.id}>
                                            <BoardingPass
                                                user={{ firstName: user.firstName, lastName: user.lastName, vid: user.vid }}
                                                origin={{ name: "PORTO ALEGRE", iata: "POA" }}
                                                destination={{ name: "GUARULHOS", iata: "GRU" }}
                                                callsign={slot.flightNumber}
                                                slotDate={new Date()}
                                                gate={slot.gate}
                                                type={slot.type === "takeoff" ? BoardingPassType.DEPARTURE : BoardingPassType.ARIVAL}
                                                actions={
                                                    <div className="flex gap-4">
                                                        {availableActions(slot)}
                                                    </div>

                                                } />
                                        </Fragment>
                                    ))}
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
