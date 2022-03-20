import { forwardRef, FunctionComponent, MouseEventHandler } from "react";
import { SidebarLinkProps } from "./SidebarLink";
import { SidebarPopover } from "./SidebarPopover";

export interface SidebarButtonProps extends Omit<SidebarLinkProps, "href"> {
    onClick: MouseEventHandler<HTMLButtonElement>
}

export const SidebarButton: FunctionComponent<SidebarButtonProps> = forwardRef<HTMLButtonElement, SidebarButtonProps>((
    { icon, title, onClick }, ref
) => (
    <SidebarPopover text={title} icon={icon}>
        <button
            className="block text-[#3C55AC] dark:text-[#838383] w-full"
            title={title}
            onClick={onClick}
            ref={ref}
        >
            <div className="w-min mx-auto">

                {icon}
            </div>
        </button>
    </SidebarPopover>
));
