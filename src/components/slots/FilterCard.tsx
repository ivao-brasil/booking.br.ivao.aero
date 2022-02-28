import { FunctionComponent } from "react";
import { FaPlaneArrival, FaPlaneDeparture, FaUserClock } from "react-icons/fa";
import { SlotTypeOptions } from "types/SlotFilter";

interface FilterCardProps {
    active?: boolean;
    slotType: SlotTypeOptions;
    text?: string;
    onClick: () => void;
    quantity?: number;
}

export const FilterCard: FunctionComponent<FilterCardProps> = ({ slotType, quantity, text, active, onClick }) => {
    let cardTitle = "";
    let cardIcon = null;

    switch (slotType) {
        case SlotTypeOptions.LANDING:
            cardTitle = "Chegadas"
            cardIcon = <FaPlaneArrival />
            break;

        case SlotTypeOptions.TAKEOFF:
            cardTitle = "Partidas"
            cardIcon = <FaPlaneDeparture />
            break;

        case SlotTypeOptions.PRIVATE:
            cardTitle = "Slots Privados"
            cardIcon = <FaUserClock />
            break;
    }

    return (
        <button
            className={`flex flex-col w-60 pl-5 pr-4 py-3 rounded-lg text-left ${active ? "bg-blue dark:bg-yellow" : "bg-light-gray-4 dark:bg-dark-gray-4"}`}
            onClick={onClick}
        >
            <div
                className={`flex items-center w-full font-header font-extrabold text-lg  ${active ? "text-white dark:text-blue" : "text-blue dark:text-light-gray-5"}`}
            >
                <span>{cardTitle}</span>
                <div className="ml-auto text-lg w-6" aria-hidden="true">
                    {cardIcon}
                </div>
            </div>
            {text && (
                <p className={`w-40 text-xs ${active ? "text-light-gray-5 dark:text-[#3C55AC]" : "text-[#858585] dark:text-light-gray-5"}`}>
                    {text}
                </p>
            )}

            {quantity && (
                <span className={`font-header font-extrabold text-lg self-end ${active ? "text-white dark:text-blue" : "text-blue dark:text-light-gray-5"}`}>
                    {quantity}
                </span>
            )}

        </button>
    );
};
