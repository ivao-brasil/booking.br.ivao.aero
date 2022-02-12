import { FunctionComponent } from "react";

export const ContentWrapper: FunctionComponent = ({ children }) => (
    <div
        className="flex-1 md:max-h-screen w-full bg-[#F7F7F7] dark:bg-dark-gray-2"
    >
       {children}
    </div>
);
