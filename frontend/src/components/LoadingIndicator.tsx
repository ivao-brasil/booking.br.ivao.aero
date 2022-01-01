import { FunctionComponent } from "react";
import { LottieFile } from "./LottieFile";

interface LoadingIndicatorProps {
    text?: string;
}

export const LoadingIndicator: FunctionComponent<LoadingIndicatorProps> = ({ text }) => {
    return (
        <>
            <LottieFile
                src="https://assets1.lottiefiles.com/packages/lf20_elm7pc3z.json"
                autoplay={true}
                className="w-48" />

            {text && <p>{text}</p>}
        </>
    );
}
