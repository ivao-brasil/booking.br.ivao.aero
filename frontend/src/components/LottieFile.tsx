import { FunctionComponent, useRef } from "react";
import { useLottieFile } from "hooks/useLottieFile";

interface LottieFileProps {
    src: string | object;
    className?: string | undefined;
}

export const LottieFile: FunctionComponent<LottieFileProps> = ({ src: dataToPlay, className }) => {
    const containerRef = useRef(null);
    useLottieFile(containerRef, dataToPlay);

    return (
        <div className={className} ref={containerRef} />
    );
};