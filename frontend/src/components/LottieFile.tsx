import { FunctionComponent, useRef } from "react";
import { useLottieFile } from "hooks/useLottieFile";

interface LottieFileProps {
    src: string | object;
    className?: string | undefined;
    autoplay?: boolean;
    loop?: boolean;
}

export const LottieFile: FunctionComponent<LottieFileProps> = ({ className, ...playerOptions }) => {
    const containerRef = useRef(null);
    useLottieFile(containerRef, { ...playerOptions });

    return (
        <div className={className} ref={containerRef} />
    );
};