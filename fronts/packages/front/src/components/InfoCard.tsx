import { FunctionComponent } from "react";

interface InfoCardProps {
    icon?: JSX.Element;
    iconBackground?: string;
    header: string;
    content: string;
}

export const HorizontalInfoCard: FunctionComponent<InfoCardProps> = ({ icon, header, content, children, iconBackground = "bg-blue" }) => (
    <div className="flex items-center max-w-[396px] p-4 bg-light-gray-4 dark:bg-dark-gray-2 rounded-[3px]">
        {icon && (
            <div className={`relative w-12 p-6 rounded-sm ${iconBackground}`}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                    {icon}
                </div>
            </div>
        )}
        <div className="ml-5">
            <span className="font-text text-blue dark:text-[#E1E1E6] font-bold text-md leading-5">{header}</span>
            <p className="font-text text-dark-gray-3 dark:text-[#A8A8B3] text-sm leading-4">{content}</p>
        </div>
        {children && (
            <div className="mt-6">
                {children}
            </div>
        )}
    </div>
);

export const VerticalInfoCard: FunctionComponent<InfoCardProps> = ({ icon, header, content, children, iconBackground = "bg-blue" }) => (
    <div className="flex flex-col items-center max-w-[238px] p-5 bg-light-gray-4 dark:bg-dark-gray-2 rounded-md">
        <div className="flex items-center gap-5">
            {icon && (
                <div className={`relative flex-initial w-12 p-6 rounded-sm ${iconBackground}`}>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                        {icon}
                    </div>
                </div>
            )}
            <span className="font-text text-blue dark:text-[#E1E1E6] font-extrabold text-md leading-5">{header}</span>
        </div>
        <p className="font-action text-dark-gray-3 dark:text-[#A8A8B3] text-sm leading-4 my-5">{content}</p>
        {children}
    </div>
);
