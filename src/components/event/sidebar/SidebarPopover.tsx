import { cloneElement, FunctionComponent, HTMLAttributes, isValidElement, ReactNode, useEffect, useState } from "react";
import { usePopper } from "react-popper";

export interface SidebarPopoverProps extends Omit<HTMLAttributes<HTMLDivElement>, "className"> {
    text: ReactNode;
    icon: ReactNode;
}

export const SidebarPopover: FunctionComponent<SidebarPopoverProps> = ({ text, icon, children, ...divProps }) => {
    const [isPopoverActive, setIsPopoverActive] = useState(false);
    const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
    const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);

    const { styles, attributes, update } = usePopper(referenceElement, popperElement, {
        placement: "right",
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 10],
                },
            },
        ],
    });

    useEffect(() => {
        if (!update) {
            return;
        }

        update();
    }, [isPopoverActive, update]);

    if (!isValidElement(children)) {
        throw new Error("An valid React children is required in SidebarPopover element.");
    }

    return (
        <>
            {isPopoverActive && (
                <div
                    ref={setPopperElement}
                    className="bg-blue dark:bg-dark-gray-2 w-[8.68rem] rounded-md text-white z-50 hidden md:block"
                    style={styles.popper}
                    {...divProps}
                    {...attributes.popper}
                >
                    <div className="relative px-4 py-3 overflow-hidden">
                        <span className="text-[0.875rem] leading-5 font-semibold font-action">
                            {text}
                        </span>
                        <div className="absolute bottom-0 right-0 opacity-10">
                            {icon}
                        </div>
                    </div>
                </div>
            )}

            {cloneElement(children, {
                ref: setReferenceElement,
                onMouseEnter: () => setIsPopoverActive(true),
                onFocus: () => setIsPopoverActive(true),
                onMouseLeave: () => setIsPopoverActive(false),
                onBlur: () => setIsPopoverActive(false),
            })}
        </>
    );
};