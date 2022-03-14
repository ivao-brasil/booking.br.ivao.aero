import { ActionButton } from "components/button/Button";
import { Filter, FilterState } from "components/filter/Filter";
import { InputField } from "components/InputField";
import { UTCClock } from "components/UTCClock";
import { useText } from "hooks/useText";
import { FormEvent, FunctionComponent, useEffect, useState } from "react";
import { FiFilter, FiSearch, FiTrash } from "react-icons/fi";

interface SlotPageHeaderProps {
    showFilter?: boolean;
    appliedFilters?: Partial<FilterState>;
    searchedFlightNumber?: string | null;
    onFlightSearch?: (flightNumber: string) => void;
    onFilterChange?: (state: Partial<FilterState>) => void;
    onFilterStateChange?: (isOpen: boolean) => void;
}

export const SlotPageHeader: FunctionComponent<SlotPageHeaderProps> = ({
    showFilter = true, appliedFilters = {}, searchedFlightNumber,
    onFlightSearch, onFilterChange, onFilterStateChange
}) => {
    const { t } = useText();
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [flightSearchValue, setflightSearchValue] = useState(searchedFlightNumber ?? "");

    useEffect(() => {
        if (onFilterStateChange) {
            onFilterStateChange(isFilterOpen);
        }
    }, [isFilterOpen]);

    const onFlightSearchSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        if (!onFlightSearch) {
            return;
        }

        onFlightSearch(flightSearchValue);
    }

    const onFiltersApplied = (filterState: Partial<FilterState>) => {
        setIsFilterOpen(false);

        if (!onFilterChange) {
            return;
        }

        onFilterChange(filterState);
    }

    return (
        <div className="flex items-center p-8 bg-white dark:bg-black">
            <form onSubmit={onFlightSearchSubmit} className="w-36">
                <InputField
                    icon={<FiSearch width={16} />}
                    type="search"
                    aria-label= { t('flights.search') }
                    placeholder= { t('flights.search') }
                    value={flightSearchValue}
                    onChange={(evt) => setflightSearchValue(evt.target.value)} />
            </form>


            <UTCClock />
            {showFilter && (
                <>
                    <span className="mx-3">|</span>
                    {Object.keys(appliedFilters ?? {}).length > 0
                        ? (
                            <ActionButton
                                height="h-7"
                                backgroundColor="bg-red/10 dark:bg-red/50"
                                iconBackgroundColor="bg-red"
                                content={
                                    <span className="font-action text-xs text-red dark:text-white p-2">
                                        { t('flights.filter.reset') }
                                    </span>
                                }
                                icon={<FiTrash size={19} />}
                                onClick={() => {
                                    onFiltersApplied({});
                                }} />
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
                                    <div className="absolute -left-[15.6rem] z-50">
                                        <Filter
                                            onChange={onFiltersApplied}
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