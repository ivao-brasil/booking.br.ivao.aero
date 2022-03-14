import { RefObject, useEffect, useState } from "react";
import lottie, { AnimationItem } from 'lottie-web';

interface LottieFileOptions {
    src: string | object;
    autoplay?: boolean;
    loop?: boolean;
}

export function useLottieFile(containerRef: RefObject<Element>, { src, autoplay, loop }: LottieFileOptions) {
    const [lottieInstance, setLottieInstance] = useState<AnimationItem | null>(null);

    useEffect(() => {
        if (containerRef.current === null) {
            return;
        }

        const animation = lottie.loadAnimation({
            container: containerRef.current,
            loop: loop,
            autoplay: autoplay,
            [typeof src === "string" ? "path" : "animationData"]: src
        });

        setLottieInstance(animation);

        return () => {
            setLottieInstance(null);
            animation.destroy();
        };
    }, [containerRef, src, loop, autoplay]);

    return lottieInstance;
}