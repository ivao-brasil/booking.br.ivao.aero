import { FunctionComponent } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { ActionButton } from "components/button/Button";
import { Header } from "components/typography/Typography";
import { useText } from "hooks/useText";

interface BookInfoMessageProps {
    header: string;
    description: string;
    type: "error" | "warning";
    onErrorReset: () => void;
}

export const BookInfoMessage: FunctionComponent<BookInfoMessageProps> = ({ header, description, onErrorReset }) => {
    const { t } = useText();
    
    return (
        <div className="max-w-[42rem] mt-11 ml-9">
            <Header textSize="text-2xl" textColor="text-blue dark:text-white">{header}</Header>
            <p className="mt-4 font-action text-[20px] text-[#858585] dark:text-light-gray-5">{description}</p>
            <div className="mt-16">
                <ActionButton content={ t('generics.back') } width="w-72" icon={<FiArrowLeft />} onClick={onErrorReset} />
            </div>
        </div>
    )
}
