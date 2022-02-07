import { FunctionComponent } from "react";
import { LottieFile } from "./LottieFile";

interface LoadingIndicatorProps {
    text?: string;
}

export const LoadingIndicator: FunctionComponent<LoadingIndicatorProps> = ({ text }) => {
    return (
        <div className="w-min mx-auto md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            <LottieFile
                src="https://assets1.lottiefiles.com/packages/lf20_elm7pc3z.json"
                autoplay={true}
                className="w-48" />

            {text && <p>{text}</p>}
        </div>
    );
}
