import { FunctionComponent, ReactNode } from "react";

interface AlertProps {
    icon: ReactNode;
    title: string;
    content: ReactNode;
    contentTextColor: string;
    backgroundColors: {
        icon: string;
        title: string;
        content: string;
    };
}

export const Alert: FunctionComponent<AlertProps> = ({ title, icon, backgroundColors, contentTextColor, content }) => {
    return (
        <div className="flex flex-col">
            <div className="flex items-stretch text-white self-end">
                <div className={`${backgroundColors.icon} p-3 rounded-tl`}>
                    {icon}
                </div>
                <div className={`${backgroundColors.title} py-2 px-6 md:px-13 rounded-tr`}>
                    <strong className="relative top-[2px] font-black font-header">
                        {title}
                    </strong>
                </div>
            </div>
            <p
                className={`${backgroundColors.content} p-2 rounded-b rounded-tl lg:max-w-[30.7rem] text-[0.87rem] font-header ${contentTextColor}`}
            >
                {content}
            </p>
        </div>
    )
}
