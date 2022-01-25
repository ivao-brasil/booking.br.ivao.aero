import { FunctionComponent } from "react";
import { HorizontalInfoCard, VerticalInfoCard } from "components/InfoCard";
import { Header, Subheader } from "components/typography/Typography";
import { FiDownload, FiMap } from "react-icons/fi";
import { ButtonText, LinkButton } from "components/button/Button";

interface UserSlotsSideInfosProps {
    atcBriefing: string;
    pilotBriefing: string;
}

export const UserSlotsSideInfos: FunctionComponent<UserSlotsSideInfosProps> = ({ atcBriefing, pilotBriefing }) => {
    return (
        <aside className="bg-white dark:bg-black w-72 h-full">
            <div className="pl-6 pt-9">
                <Header textSize="text-lg" textColor="text-blue dark:text-white">Meus voos</Header>
                <Subheader textSize="text-md" textColor="text-light-blue dark:text-white">Visualize seus agendamentos</Subheader>
                <div className="mt-12">
                    <VerticalInfoCard
                        icon={<FiMap size={25} />}
                        header="Briefing do Piloto"
                        content="Este documento objetiva orientar os pilotos sobre os procedimentos específicos esperados para este evento. A leitura é fundamental."
                    >
                        <LinkButton
                            width="w-full"
                            height="h-9"
                            icon={<FiMap size={18} />}
                            href={pilotBriefing}
                            content={
                                <span className="block w-full px-8 text-center font-semibold text-xs text-white">
                                    Visualizar
                                </span>
                            }
                        />
                    </VerticalInfoCard>
                </div>
            </div>
        </aside>
    )
}
