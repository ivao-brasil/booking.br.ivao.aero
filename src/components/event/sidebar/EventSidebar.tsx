import { ThemeContext, ThemeVariants } from "context/ThemeContext";
import { FunctionComponent, useContext } from "react";
import { FiClipboard, FiHome, FiInfo, FiLogOut, FiMoon, FiSun } from "react-icons/fi";
import { IoAirplaneOutline } from 'react-icons/io5';
import { useLocation, useParams } from "react-router-dom";
import { Logo } from "../../Logo";
import { SidebarLink } from "./SidebarLink";
import { SidebarButton } from "./SidebarButton";
import { useText } from "hooks/useText";

interface EventSidebarProps {
    visible?: boolean;
}

const ICON_SIZE = 28;

export const EventSidebar: FunctionComponent<EventSidebarProps> = ({ visible = true }) => {
    const { eventId: eventIdUrl } = useParams();
    let { state: locationState } = useLocation();
    const { themeVariant, setThemeVariant } = useContext(ThemeContext);
    const { t } = useText();

    const locationData = locationState as { eventId: number } | undefined;
    const eventId = eventIdUrl || locationData?.eventId;

    if (eventId === undefined) {
        throw new Error("The event id is undefined");
    }

    return (
        <nav className={`${visible ? "" : "hidden"} flex flex-row lg:flex-col w-full lg:w-28 h-full px-4 lg:px-0 bg-blue dark:bg-dark-gray-2 shadow-3xl overflow-x-auto`}>
            <div className="hidden lg:block mt-7">
                <Logo sidebar={true} />
            </div>

            <div className="flex items-center lg:items-stretch flex-row lg:flex-col lg:my-auto gap-8">
                <SidebarLink
                    href={`/event/${eventId}`}
                    icon={<FiInfo size={ICON_SIZE} />}
                    title={t('sidebarPanel.information')}
                    indexLink />

                <SidebarLink
                    href={`/event/${eventId}/slots`}
                    icon={<IoAirplaneOutline size={ICON_SIZE} />}
                    title={t('sidebarPanel.flights')} />

                <SidebarLink
                    href={`/event/${eventId}/my-slots`}
                    icon={<FiClipboard size={ICON_SIZE} />}
                    title={t('sidebarPanel.myFlights')}
                    state={{ eventId }} />

                <SidebarLink
                    href={`/events`}
                    icon={<FiHome size={ICON_SIZE} />}
                    title={t('sidebarPanel.eventsHome')} />
            </div>
            <div className="my-auto lg:my-0 mx-auto lg:mx-0 ml-8 lg:ml-0 lg:mt-auto lg:mb-10">
                <div className="flex items-center lg:items-stretch flex-row lg:flex-col lg:my-auto gap-8">
                    <SidebarButton
                        icon={themeVariant === ThemeVariants.LIGHT ? <FiMoon size={ICON_SIZE} /> : <FiSun size={ICON_SIZE} />}
                        title={t('sidebarPanel.changeTheme')}
                        onClick={() => setThemeVariant(themeVariant === ThemeVariants.DARK ? ThemeVariants.LIGHT : ThemeVariants.DARK)} />

                    <SidebarLink
                        href={`/logout`}
                        icon={<FiLogOut size={ICON_SIZE} />}
                        title={t('sidebarPanel.logout')} />
                </div>
            </div>
        </nav>
    )
}
