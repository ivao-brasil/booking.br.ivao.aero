import { Fragment } from "react";
import { useParams } from "react-router-dom";

import { useEvent } from "hooks/useEvent";
import { useUserSlots } from "hooks/useUserSlots";
import { BoardingPass, BoardingPassType } from "components/boarding/BoardingPass";
import { ContentWrapper } from "components/slots/ContentWrapper";
import { SlotPageHeader } from "components/slots/SlotPageHeader";
import { UserSlotsSideInfos } from "components/slots/UserSlotsSideInfos";
import { LoadingIndicator } from "components/LoadingIndicator";
import { ActionButton, LinkButton } from "components/button/Button";
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

    const today = new Date();

    return (
        <div className="flex flex-col md:flex-row h-full">
            <UserSlotsSideInfos pilotBriefing={event.pilotBriefing} />

            <ContentWrapper>
                <SlotPageHeader showFilter={false} />
                <div className="max-w-[61rem] px-8 mt-4 xl:px-0 xl:mx-auto mb-8 space-y-5 overflow-x-auto">
                    {isLoadingSlots && (
                        <div className="relative">
                            <LoadingIndicator />
                        </div>
                    )}
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
                                            slot?.event?.dateEnd && today <= new Date(slot.event.dateEnd) && (
                                                <div className="flex gap-4">
                                                    <ActionButton
                                                        backgroundColor="bg-red"
                                                        content={
                                                            <span className="block w-full px-8 py-2.5 text-xs text-center font-header font-bold text-white truncate">
                                                                Cancelar voo
                                                            </span>
                                                        }
                                                        height="h-8" />

                                                    <LinkButton
                                                        href="/slot/1/confirm"
                                                        content={
                                                            <span className="block w-full px-8 py-2.5 text-xs text-center font-header font-bold text-white truncate">
                                                                Confirmar voo
                                                            </span>
                                                        }
                                                        height="h-8" />
                                                </div>
                                            )
                                        } />
                                </Fragment>
                            ))}
                        </Fragment>
                    ))}
                    {(hasNextPage) && (
                        <div className="flex justify-center mt-8">
                            {isFetchingNextPage ? <LoadingIndicator /> : (
                                <ActionButton content="Ver mais itens" backgroundFilled={false} onClick={() => fetchNextPage()} />
                            )}
                        </div>
                    )}
                </div>
            </ContentWrapper>
        </div>
    )
}
