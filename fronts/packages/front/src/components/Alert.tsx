import { FunctionComponent, ReactNode, useState } from "react";
import { FiAlertTriangle, FiXCircle } from "react-icons/fi";

interface AlertProps {
    content: ReactNode;
    hasCloseButton?: boolean;
}

export const Alert: FunctionComponent<AlertProps> = ({ content, hasCloseButton = false }) => {
    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="bg-yellow text-black p-4 rounded">
            <div className="flex items-center">
                <div className="mr-3">
                    <FiAlertTriangle size={32} />
                </div>
                <p>
                    {content}
                </p>
                {hasCloseButton && (
                    <button className="ml-auto" onClick={() => setIsOpen(false)}>
                        <FiXCircle size={24} />
                    </button>
                )}
            </div>
        </div>
    )
}
