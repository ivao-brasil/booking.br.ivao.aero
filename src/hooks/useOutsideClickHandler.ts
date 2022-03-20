import { MutableRefObject, useEffect } from "react";
import { findDOMNode } from "react-dom";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export function useOutsideClickHandler(ref: MutableRefObject<HTMLElement | null>, onOutsideClick: () => void) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: MouseEvent) {
            if (!ref.current || !(event.target instanceof HTMLElement)) {
                return;
            }

            if (!findDOMNode(ref.current)?.contains(event.target)) {
                onOutsideClick();
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, onOutsideClick]);
}
