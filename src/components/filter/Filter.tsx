import { Checkbox } from "components/checkbox/Checkbox";
import { InputField } from "components/InputField";
import { useText } from "hooks/useText";
import { ChangeEvent, FormEvent, FunctionComponent, useState } from "react";
import style from "./filter.module.css";

export interface FilterProps {
  appliedFilters?: Partial<FilterState>;
  onChange: (state: Partial<FilterState>) => void;
}

export enum FlightDuration {
  LESS_ONE_HOUR,
  UNTIL_THREE_HOURS,
  UNTIL_SIX_HOURS,
  MORE_6_HORAS,
}

export interface FilterState {
  flightNumber: string;
  aircraft: string;
  airline: string;
  origin: string;
  destination: string;
  available: boolean;
}

export const Filter: FunctionComponent<FilterProps> = ({ appliedFilters = {}, onChange }) => {
  const [filters, setFilters] = useState<Partial<FilterState>>(appliedFilters);
  const { t } = useText();

  const resetFilters = () => {
    if (filters.flightNumber) {
      setFilters(({ flightNumber }) => {
        return { flightNumber };
      });

      onChange({ flightNumber: filters.flightNumber });
      return;
    }

    setFilters({});
    onChange({});
  };

  const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFilters(prevState => ({ ...prevState, [evt.target.name]: evt.target.value }));
  }

  const onFilterSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    onChange(filters);
  }

  const onAvailableCheckboxChange = (value: boolean) => {
    if (!value) {
      setFilters(prevState => {
        const newFilters = {...prevState};
        delete newFilters.available;
        return newFilters;
      });

      return;
    }

    setFilters(prevState => ({ ...prevState, "available": value }));
  }

  return (
    <section className={style.filter}>
      <header>{ t('flights.filter.title') }</header>
      <main>
        <form onSubmit={onFilterSubmit}>
          <div className={style.firstRow}>
            <label className="sr-only" htmlFor="aircraft-filter">{ t('flights.filter.aircraft') }</label>
            <InputField
              placeholder={ t('flights.filter.aircraft') }
              id="aircraft-filter"
              name="aircraft"
              value={filters.aircraft ?? ""}
              onChange={onInputChange}
            />

            <div className="ml-2">
              <label className="sr-only" htmlFor="company-filter">{ t('flights.filter.airline') }</label>
              <InputField
                placeholder={ t('flights.filter.airline') }
                id="company-filter"
                name="airline"
                value={filters.airline ?? ""}
                onChange={onInputChange}
              />
            </div>
          </div>

          <div className={style.secondRow}>
            <label className="sr-only" htmlFor="origin-filter">{ t('flights.filter.origin') }</label>
            <InputField
              placeholder={ t('flights.filter.origin') }
              id="origin-filter"
              name="origin"
              value={filters.origin ?? ""}
              onChange={onInputChange}
            />

            <div className="ml-2">
              <label className="sr-only" htmlFor="destination-filter">{ t('flights.filter.destination') }</label>
              <InputField
                placeholder={ t('flights.filter.destination') }
                id="destination-filter"
                name="destination"
                value={filters.destination ?? ""}
                onChange={onInputChange}
              />
            </div>
          </div>

          <div className={style.thirdRow}>
            <Checkbox
              value={filters.available ?? false}
              onChange={onAvailableCheckboxChange}
            />
            <span>{ t('flights.filter.showAvailableOnly') }</span>
          </div>

          <div className={style.fourthRow}>
            <button type="reset" onClick={resetFilters} className={style.resetButton}>
              { t('flights.filter.reset') }
            </button>
            <button type="submit" className={style.submitButton}>
              { t('flights.filter.apply') }
            </button>
          </div>
        </form>
      </main>
    </section>
  );
};
