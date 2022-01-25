import { FunctionComponent, useEffect, useMemo, useState } from "react";
import { Filter } from "components/filter/Filter";
import { FlightSearchInput } from "components/FlightSearchInput";
import { FiFilter } from "react-icons/fi";

interface SlotPageHeaderProps {
    showFilter?: boolean;
}

export const SlotPageHeader: FunctionComponent<SlotPageHeaderProps> = ({ showFilter = true }) => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isFilterOpen, setIsFilterOpen] = useState(false);

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
        <div className="flex items-center dark:bg-black p-8">
            <FlightSearchInput />
            <span className="text-inherit ml-auto text-[12px]">{utcTime} UTC</span>
            {showFilter && (
                <>
                    <span className="mx-3">|</span>
                    <div className="relative">
                        <button
                            className={`block p-2 rounded-md text-white ${isFilterOpen ? "bg-blue dark:bg-yellow rounded-b-none" : "bg-light-gray-4 text-blue dark:text-white dark:bg-dark-gray-2"}`}
                            aria-label="Abrir filtros"
                            onClick={() => setIsFilterOpen((prevState) => !prevState)}
                        >
                            <FiFilter aria-hidden="true" />
                        </button>
                        {isFilterOpen && (
                            <div className="absolute -left-[235px]">
                                <Filter aircrafts={[]} airlines={[]} onChange={() => { }} />
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}