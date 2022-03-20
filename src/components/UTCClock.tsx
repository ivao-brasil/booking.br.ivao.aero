import { useEffect, useMemo, useState } from "react";

export const UTCClock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timerInverval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timerInverval);
    }, []);

    const utcTime = useMemo(() => {
        const timeParts = [currentTime.getUTCHours(), currentTime.getUTCMinutes(), currentTime.getUTCSeconds()].map((timePart => {
            return timePart < 10 ? "0" + timePart : timePart.toString();
        }));

        return timeParts.join(":");
    }, [currentTime]);

    return (
        <span className="text-inherit text-[12px]">{utcTime} UTC</span>
    );
}