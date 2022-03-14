import { FunctionComponent } from "react";

type HtmlInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

interface InputFieldProps extends Omit<HtmlInputProps, "className"> {
    icon?: JSX.Element;
}

export const InputField: FunctionComponent<InputFieldProps> = ({ icon, ...htmlInputProps }) => (
    <div className="relative">
        {icon && (
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                {icon}
            </div>
        )}

        <input
            className={`block w-full ${icon ? "pl-7" : "pl-2"} pr-2 border-0 border-b border-[#818181] dark:border-dark-gray-3 text-[#818181] dark:text-light-gray-5 bg-white dark:bg-black font-action placeholder:text-[12px]`}
            {...htmlInputProps} />
    </div>
);
