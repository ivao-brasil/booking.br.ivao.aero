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
            <UserSlotsSideInfos atcBriefing={event.atcBriefing} pilotBriefing={event.pilotBriefing} />

            <div className="flex-auto flex flex-col">
                <SlotPageHeader showFilter={false} />
                <ContentWrapper>
                    <div className="mx-2 md:ml-8 md:mr-4 mt-4 overflow-x-auto">
                        <BoardingPass
                            user={{ firstName: "A", lastName: "B", vid: "1" }}
                            origin={{ name: "O NAME", iata: "O IATA" }}
                            destination={{ name: "D NAME", iata: "D IATA" }}
                            callsign="ABC123"
                            slotDate={new Date()}
                            gate="123"
                            type={BoardingPassType.DEPARTURE} />
                    </div>
                </ContentWrapper>
            </div>
        </div>
    )
}
