import { ThemeContext, ThemeVariants } from "context/ThemeContext";
import { useEvent } from "hooks/useEvent";
import { FunctionComponent, MouseEventHandler, useContext } from "react";
import { FiClipboard, FiCompass, FiHome, FiInfo, FiLogOut, FiMoon, FiSun } from "react-icons/fi";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { Logo } from "./Logo";

interface SidebarLinkProps {
    title: string;
    href: string;
    icon: JSX.Element;
    indexLink?: boolean;
    state?: any;
}

const SidebarLink: FunctionComponent<SidebarLinkProps> = ({ href, icon, title, state, indexLink = false }) => {
    const activeClasses = "text-white border-b-4 lg:border-b-0 lg:border-l-4 border-white py-3";
    const inactiveClasses = "text-[#3C55AC] dark:text-[#838383]";

    return (
        <NavLink
            to={href}
            className={({ isActive }) => `block ${isActive ? activeClasses : inactiveClasses}`}
            title={title}
            end={indexLink}
            state={state}
        >
            {({ isActive }) => (
                <div className="w-min mx-auto">
                    <div className={isActive ? "lg:-ml-1" : ""}>
                        {icon}
                    </div>
                </div>
            )}
        </NavLink>
    );
};

interface SidebarButtonProps extends Omit<SidebarLinkProps, "href"> {
    onClick: MouseEventHandler<HTMLButtonElement>
}

const SidebarButton: FunctionComponent<SidebarButtonProps> = ({ icon, title, onClick }) => (
    <button
        className="block text-[#3C55AC] dark:text-[#838383] w-full"
        title={title}
        onClick={onClick}
    >
        <div className="w-min mx-auto">

            {icon}
        </div>
    </button>
);

interface EventSidebarProps {
    visible?: boolean;
}

export const EventSidebar: FunctionComponent<EventSidebarProps> = ({ visible = true }) => {
    const { eventId: eventIdUrl } = useParams();
    let { state: locationState } = useLocation();
    const locationData = locationState as { eventId: number } | undefined;

    const { themeVariant, setThemeVariant } = useContext(ThemeContext);

    const eventId = eventIdUrl || locationData?.eventId;
    const { data: event, isLoading: isLoadingEvent } = useEvent(Number(eventId));

    const ICON_SIZE = 28;

    if (eventId === undefined) {
        throw new Error("The event id is undefined");
    }

    return (
        <nav className={`${visible ? "" : "hidden"} flex flex-row lg:flex-col w-full lg:w-28 h-full px-4 lg:px-0 bg-blue dark:bg-dark-gray-2 shadow-3xl overflow-x-auto`}>
            <div className="hidden lg:block">
                <Logo sidebar={true} />
            </div>

            <div className="flex items-center lg:items-stretch flex-row lg:flex-col lg:my-auto gap-8">
                <SidebarLink
                    href={`/event/${eventId}`}
                    icon={<FiInfo size={ICON_SIZE} />}
                    title="Sobre o evento"
                    indexLink />

                {event?.has_started && (
                    <>
                        <SidebarLink
                            href={`/event/${eventId}/slots`}
                            icon={<FiCompass size={ICON_SIZE} />}
                            title="Voos" />

                        <SidebarLink
                            href={`/event/${eventId}/my-slots`}
                            icon={<FiClipboard size={ICON_SIZE} />}
                            title="Meus Voos"
                            state={{ eventId }} />
                    </>
                )}

                {/* <SidebarLink
                    href={`/events`}
                    icon={<FiGlobe size={ICON_SIZE} />}
                    title="Ver lista de eventos" /> */}

                <SidebarLink
                    href={`/events`}
                    icon={<FiHome size={ICON_SIZE} />}
                    title="Ver lista de eventos" />
            </div>
            <div className="my-auto lg:my-0 mx-auto lg:mx-0 ml-8 lg:ml-0 lg:mt-auto lg:mb-10">
                <div className="flex items-center lg:items-stretch flex-row lg:flex-col lg:my-auto gap-8">
                    <SidebarButton
                        icon={themeVariant === ThemeVariants.LIGHT ? <FiMoon size={ICON_SIZE} /> : <FiSun size={ICON_SIZE} />}
                        title="Alterar tema"
                        onClick={() => setThemeVariant(themeVariant === ThemeVariants.DARK ? ThemeVariants.LIGHT : ThemeVariants.DARK)} />

                    <SidebarLink
                        href={`/logout`}
                        icon={<FiLogOut size={ICON_SIZE} />}
                        title="Sair" />
                </div>
            </div>
        </nav>
    )
}
