import { FunctionComponent } from "react";
import { VerticalInfoCard } from "components/InfoCard";
import { Header, Subheader } from "components/typography/Typography";
import { FiDownload, FiMap } from "react-icons/fi";
import { LinkButton } from "components/button/Button";
import { useText } from "hooks/useText";

interface UserSlotsSideInfosProps {
    pilotBriefing: string;
}

export const UserSlotsSideInfos: FunctionComponent<UserSlotsSideInfosProps> = ({ pilotBriefing }) => {
    const { t } = useText();
    
    return (
        <aside className="px-6 pt-9 bg-white dark:bg-black h-full">
            <Header textSize="text-lg" textColor="text-blue dark:text-white">{ t('myFlights.title') }</Header>
            <Subheader textSize="text-md" textColor="text-light-blue dark:text-white">{ t('myFlights.subtitle') }</Subheader>
            <div className="mt-12">
                <VerticalInfoCard
                    icon={<FiMap size={25} />}
                    header={ t('info.pilotBriefing.title') }
                    content={ t('info.pilotBriefing.description') }
                >
                    <LinkButton
                        width="w-full"
                        height="h-9"
                        icon={<FiDownload size={18} />}
                        href={pilotBriefing}
                        content={
                            <span className="block w-full px-8 text-center font-semibold text-xs text-white">
                                { t('generics.see') }
                            </span>
                        }
                    />
                </VerticalInfoCard>
            </div>
        </aside>
    )
}
