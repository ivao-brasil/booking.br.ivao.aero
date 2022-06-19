import { FunctionComponent, ReactNode } from "react";

interface FilterCardProps {
    active?: boolean;
    text?: string;
    onClick: () => void;
    quantity?: number;
    title: string;
    icon: ReactNode;
}

export const FilterCard: FunctionComponent<FilterCardProps> = ({
    title,
    icon,
    quantity,
    text,
    active,
    onClick
}) => {
    return (
        <button
            className={`flex flex-col w-60 pl-5 pr-4 py-3 rounded-lg text-left ${active ? "bg-blue dark:bg-yellow" : "bg-light-gray-4 dark:bg-dark-gray-4"}`}
            onClick={onClick}
        >
            <div
                className={`flex items-center w-full font-header font-extrabold text-lg  ${active ? "text-white dark:text-blue" : "text-blue dark:text-light-gray-5"}`}
            >
                <span>{title}</span>
                <div className="ml-auto text-lg w-6" aria-hidden="true">
                    {icon}
                </div>
            </div>
            {text && (
                <p className={`w-40 text-xs ${active ? "text-light-gray-5 dark:text-[#3C55AC]" : "text-[#858585] dark:text-light-gray-5"}`}>
                    {text}
                </p>
            )}

            {quantity !== undefined && (
                <span className={`font-header font-extrabold text-lg self-end ${active ? "text-white dark:text-blue" : "text-blue dark:text-light-gray-5"}`}>
                    {quantity}
                </span>
            )}

        </button>
    );
};
