import { Fragment } from "react";
import { useParams } from "react-router-dom";

import { useEvent } from "hooks/useEvent";
import { useUserSlots } from "hooks/slots/useUserSlots";
import { BoardingPass, BoardingPassType } from "components/boarding/BoardingPass";
import { SlotPageHeader } from "components/slots/SlotPageHeader";
import { UserSlotsSideInfos } from "components/slots/UserSlotsSideInfos";
import { LoadingIndicator } from "components/LoadingIndicator";
import { ActionButton } from "components/button/Button";
import { useAuthData } from "hooks/useAuthData";

export default function UserSlots() {
    const { eventId } = useParams();
    const { data: event, isLoading: isLoadingEvent } = useEvent(Number(eventId));
    const { data: slots, isLoading: isLoadingSlots, hasNextPage, isFetchingNextPage, fetchNextPage } = useUserSlots();
    const { data: user, isLoading: isLoadingUser } = useAuthData();

    if (isLoadingEvent || isLoadingUser || !event || !user) {
        return (
            <LoadingIndicator />
        )
    }

    return (
        <div className="flex flex-col md:flex-row h-full">
            <UserSlotsSideInfos pilotBriefing={event.pilotBriefing} />

            <div className="flex-1 md:max-h-screen w-full bg-[#F7F7F7] dark:bg-dark-gray-2">
                <SlotPageHeader showFilter={false} />
                <div className="h-screen lg:h-slot-table lg:mt-5 overflow-auto scrollbar-thin scrollbar-thumb-light-gray-5 dark:scrollbar-thumb-black scrollbar-thumb-rounded">
                    <div className="max-w-[62rem] mx-auto">
                        {isLoadingSlots && (
                            <div className="relative">
                                <LoadingIndicator />
                            </div>
                        )}
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
                                                        <ActionButton
                                                            backgroundColor="bg-red"
                                                            content={
                                                                <span className="block w-full px-8 py-2.5 text-xs text-center font-header font-bold text-white truncate">
                                                                    Cancelar voo
                                                                </span>
                                                            }
                                                            height="h-8" />

                                                        <ActionButton
                                                            content={
                                                                <span className="block w-full px-8 py-2.5 text-xs text-center font-header font-bold text-white truncate">
                                                                    Confirmar voo
                                                                </span>
                                                            }
                                                            height="h-8" />
                                                    </div>

                                                } />
                                        </Fragment>
                                    ))}
                                </Fragment>
                            ))}
                        </div>
                        {(hasNextPage) && (
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
