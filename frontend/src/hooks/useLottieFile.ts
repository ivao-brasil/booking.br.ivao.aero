import { RefObject, useEffect, useState } from "react";
import lottie, { AnimationItem } from 'lottie-web';

export function useLottieFile(containerRef: RefObject<Element>, animationData: string | object) {
    const [lottieInstance, setLottieInstance] = useState<AnimationItem | null>(null);

    useEffect(() => {
        if (containerRef.current === null) {
            return;
        }

        const animation = lottie.loadAnimation({
            container: containerRef.current,
            loop: true,
            autoplay: true,
            [typeof animationData === "string" ? "path" : "animationData"]: animationData
        });

        setLottieInstance(animation);

        return () => {
            setLottieInstance(null);
            animation.destroy();
        };
    }, [containerRef, animationData]);

    return lottieInstance;
}