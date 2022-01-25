import { useParams } from "react-router-dom";

import { BoardingPass, BoardingPassType } from "components/boarding/BoardingPass";
import { ContentWrapper } from "components/slots/ContentWrapper";
import { SlotPageHeader } from "components/slots/SlotPageHeader";
import { UserSlotsSideInfos } from "components/slots/UserSlotsSideInfos";
import { LoadingIndicator } from "components/LoadingIndicator";
import { useEvent } from "hooks/useEvent";

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
                <UserSlotsSideInfos atcBriefing={event.atcBriefing} pilotBriefing={event.pilotBriefing} />
            </div>

            <div className="flex-auto flex flex-col">
                <SlotPageHeader showFilter={false} />
                <ContentWrapper>
                    <div className="max-w-[61rem] mx-auto mt-4">
                        <BoardingPass
                            user={{ firstName: "ARAUTO", lastName: "HERMES", vid: "595866" }}
                            origin={{ name: "PORTO ALEGRE", iata: "POA" }}
                            destination={{ name: "GUARULHOS", iata: "GRU" }}
                            callsign="TAM2056"
                            slotDate={new Date()}
                            gate="123"
                            type={BoardingPassType.DEPARTURE} />
                    </div>
                </ContentWrapper>
            </div>
        </div>
    )
}
