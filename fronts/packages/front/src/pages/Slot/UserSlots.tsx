import { useParams } from "react-router-dom";

import { BoardingPass, BoardingPassType } from "components/boarding/BoardingPass";
import { ContentWrapper } from "components/slots/ContentWrapper";
import { SlotPageHeader } from "components/slots/SlotPageHeader";
import { UserSlotsSideInfos } from "components/slots/UserSlotsSideInfos";
import { LoadingIndicator } from "components/LoadingIndicator";
import { useEvent } from "hooks/useEvent";
import { ActionButton, LinkButton } from "components/button/Button";

export default function UserSlots() {
    const { eventId } = useParams();
    const { data: event, isLoading: isLoadingEvent } = useEvent(Number(eventId));

    if (isLoadingEvent || !event) {
        return (
            <LoadingIndicator />
        )
    }

    return (
        <div className="flex flex-col md:flex-row h-full">
            <div className="md:flex-none">
                <UserSlotsSideInfos pilotBriefing={event.pilotBriefing} />
            </div>

            <div className="flex-auto flex flex-col">
                <SlotPageHeader showFilter={false} />
                <ContentWrapper>
                    <div className="max-w-[61rem] px-8 mx-auto mt-4">
                        <BoardingPass
                            user={{ firstName: "ARAUTO", lastName: "HERMES", vid: "595866" }}
                            origin={{ name: "PORTO ALEGRE", iata: "POA" }}
                            destination={{ name: "GUARULHOS", iata: "GRU" }}
                            callsign="TAM2056"
                            slotDate={new Date()}
                            gate="123"
                            type={BoardingPassType.DEPARTURE}
                            actions={
                                <div className="flex gap-4">
                                    <ActionButton
                                        backgroundColor="bg-red"
                                        content={
                                            <span className="block w-full px-8 py-2.5 text-xs text-center font-header font-bold text-white truncate">
                                                Cancelar agendamento
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
                            } />
                    </div>
                </ContentWrapper>
            </div>
        </div>
    )
}
