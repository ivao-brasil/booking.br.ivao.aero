import { forwardRef, useRef, useState } from "react";
import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { SidebarPopover } from "./SidebarPopover";

export interface SidebarLinkProps {
    title: string;
    href: string;
    icon: JSX.Element;
    indexLink?: boolean;
    state?: any;
}

export const SidebarLink: FunctionComponent<SidebarLinkProps> = forwardRef<HTMLAnchorElement, SidebarLinkProps>((
    { href, icon, title, state, indexLink = false }, ref
) => {
    const activeClasses = "text-white border-b-4 lg:border-b-0 lg:border-l-4 border-white py-3";
    const inactiveClasses = "text-[#3C55AC] dark:text-[#838383]";

    return (
        <SidebarPopover text={title} icon={icon}>
            <NavLink
                to={href}
                className={({ isActive }) => `block relative ${isActive ? activeClasses : inactiveClasses}`}
                title={title}
                end={indexLink}
                state={state}
                ref={ref}
            >
                {({ isActive }) => (
                    <div className="w-min mx-auto relative">
                        <div className={isActive ? "lg:-ml-1" : ""}>
                            {icon}
                        </div>
                    </div>
                )}
            </NavLink>
        </SidebarPopover>
    );
});
