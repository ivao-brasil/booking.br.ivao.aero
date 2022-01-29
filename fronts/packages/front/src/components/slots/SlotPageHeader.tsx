import { FunctionComponent, useEffect, useMemo, useRef, useState } from "react";
import { FiFilter, FiTrash } from "react-icons/fi";
import { Filter, FilterState } from "components/filter/Filter";
import { FlightSearchInput } from "components/FlightSearchInput";
import { ActionButton } from "components/button/Button";

interface SlotPageHeaderProps {
    showFilter?: boolean;
    onFilterChange?: (state: FilterState) => void;
}

export const SlotPageHeader: FunctionComponent<SlotPageHeaderProps> = ({ onFilterChange, showFilter = true }) => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [hasFlightFilter, setHasFlightFilter] = useState(false);

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
        <div className="flex items-center p-8 bg-white dark:bg-black">
            <FlightSearchInput />
            <span className="text-inherit ml-auto text-[12px]">{utcTime} UTC</span>
            {showFilter && (
                <>
                    <span className="mx-3">|</span>
                    {hasFlightFilter
                        ? (
                            <ActionButton
                                height="h-7"
                                backgroundColor="bg-red/10 dark:bg-red/50"
                                iconBackgroundColor="bg-red"
                                content={
                                    <span className="font-action text-xs text-red dark:text-white p-2">
                                        Remover Filtros
                                    </span>
                                }
                                icon={<FiTrash size={19} />}
                                onClick={() => setHasFlightFilter(false)} />
                        )
                        : (
                            <div className="relative">
                                <button
                                    className={`block p-2 rounded-md text-white ${isFilterOpen ? "bg-blue dark:bg-yellow rounded-b-none" : "bg-light-gray-4 text-blue dark:text-white dark:bg-dark-gray-2"}`}
                                    aria-label="Abrir filtros"
                                    onClick={() => setIsFilterOpen(prevState => !prevState)}
                                    aria-haspopup="true"
                                    aria-expanded={isFilterOpen}
                                >
                                    <FiFilter aria-hidden="true" />
                                </button>
                                {isFilterOpen && (
                                    <div className="absolute -left-[15.6rem]">
                                        <Filter
                                            aircrafts={[]}
                                            airlines={[]}
                                            onChange={(state) => {
                                                setHasFlightFilter(true);
                                                setIsFilterOpen(false);
                                                onFilterChange && onFilterChange(state);
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        )}
                </>
            )}
        </div>
    );
}