import { FunctionComponent } from "react";

export const ContentWrapper: FunctionComponent = ({ children }) => (
    <div
        className="flex-1 md:max-h-screen w-full bg-[#F7F7F7] dark:bg-dark-gray-2 overflow-y-auto scrollbar-thin scrollbar-thumb-light-gray-5 dark:scrollbar-thumb-black scrollbar-thumb-rounded"
    >
       {children}
    </div>
);
