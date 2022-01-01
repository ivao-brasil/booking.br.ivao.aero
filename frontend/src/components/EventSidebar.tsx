import { ThemeContext, ThemeVariants } from "context/ThemeContext";
import { FunctionComponent, MouseEventHandler, useContext } from "react";
import { FiClipboard, FiCompass, FiGlobe, FiInfo, FiLogOut, FiMoon } from "react-icons/fi";
import { NavLink, useParams } from "react-router-dom";
import { Logo } from "./Logo";

interface SidebarLinkProps {
    title: string;
    href: string;
    icon: JSX.Element;
}

const SidebarLink: FunctionComponent<SidebarLinkProps> = ({ href, icon, title }) => {
    const activeClasses = "text-white border-b-4 md:border-b-0 md:border-l-4 border-white py-3";
    const inactiveClasses = "text-[#3C55AC] dark:text-[#838383]";

    return (
        <NavLink
            to={href}
            className={({ isActive }) => `block ${isActive ? activeClasses : inactiveClasses}`}
            title={title}
        >
            {({ isActive }) => (
                <div className="w-min mx-auto">
                    <div className={isActive ? "md:-ml-1" : ""}>
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
    const { eventId } = useParams();
    const { themeVariant, setThemeVariant } = useContext(ThemeContext);
    const ICON_SIZE = 28;

    return (
        <nav className={`${visible ? "" : "hidden"} flex flex-row md:flex-col w-full md:w-28 bg-blue dark:bg-dark-gray-2 px-4 md:px-0 overflow-x-scroll`}>
            <div className="hidden md:block">
                <Logo sidebar={true} />
            </div>

            <div className="flex items-center md:items-stretch flex-row md:flex-col md:my-auto gap-8">
                <SidebarLink
                    href={`/event/${eventId}`}
                    icon={<FiInfo size={ICON_SIZE} />}
                    title="Sobre o evento" />

                <SidebarLink
                    href={`/event/${eventId}/flights`}
                    icon={<FiCompass size={ICON_SIZE} />}
                    title="Voos" />

                <SidebarLink
                    href={`/event/${eventId}/my-flights`}
                    icon={<FiClipboard size={ICON_SIZE} />}
                    title="Meus Voos" />

                <SidebarButton
                    icon={<FiMoon size={ICON_SIZE} />}
                    title="Alterar tema"
                    onClick={() => setThemeVariant(themeVariant === ThemeVariants.DARK ? ThemeVariants.LIGHT : ThemeVariants.DARK)} />

                <SidebarLink
                    href={`/`}
                    icon={<FiGlobe size={ICON_SIZE} />}
                    title="Home" />
            </div>
            <div className="mx-auto md:mx-0 ml-8 md:ml-0 md:mt-auto md:mb-10">
                <SidebarLink
                    href={`/logout`}
                    icon={<FiLogOut size={ICON_SIZE} />}
                    title="Sair" />
            </div>
        </nav>
    )
}
