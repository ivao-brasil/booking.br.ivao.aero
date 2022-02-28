import { Checkbox } from "components/checkbox/Checkbox";
import { InputField } from "components/InputField";
import { ChangeEvent, FunctionComponent, useState } from "react";
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
  aircraft: string;
  airline: string;
  origin: string;
  destination: string;
  available: boolean;
}

export const Filter: FunctionComponent<FilterProps> = ({ appliedFilters = {}, onChange }) => {
  const [filters, setFilters] = useState<Partial<FilterState>>(appliedFilters);

  const resetFilters = () => {
    setFilters({});
  };

  const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFilters(prevState => ({ ...prevState, [evt.target.name]: evt.target.value }));
  }

  const onFilterSubmit = () => {
    onChange(filters);
  }

  const onAvailableCheckboxChange = (value: boolean) => {
    if (!value) {
      setFilters(prevState => {
        delete prevState["available"];
        return { ...prevState };
      });

      return;
    }

    setFilters(prevState => ({ ...prevState, "available": value }));
  }

  return (
    <section className={style.filter}>
      <header>Filtrar</header>
      <main>
        <div>
          <label className="sr-only" htmlFor="aircraft-filter">Aeronave</label>
          <InputField
            placeholder="Aeronave"
            id="aircraft-filter"
            name="aircraft"
            value={filters.aircraft ?? ""}
            onChange={onInputChange}
          />

          <div className="ml-2">
            <label className="sr-only" htmlFor="company-filter">Companhia</label>
            <InputField
              placeholder="Companhia"
              id="company-filter"
              name="airline"
              value={filters.airline ?? ""}
              onChange={onInputChange}
            />
          </div>
        </div>

        <div className="flex px-[1.125rem]">
          <label className="sr-only" htmlFor="origin-filter">Origem</label>
          <InputField
            placeholder="Origem"
            id="origin-filter"
            name="origin"
            value={filters.origin ?? ""}
            onChange={onInputChange}
          />

          <div className="ml-2">
            <label className="sr-only" htmlFor="destination-filter">Destino</label>
            <InputField
              placeholder="Destination"
              id="destination-filter"
              name="destination"
              value={filters.destination ?? ""}
              onChange={onInputChange}
            />
          </div>
        </div>

        <div>
          <Checkbox
            value={filters.available ?? false}
            onChange={onAvailableCheckboxChange}
          />
          <span>Exibir somente voos disponíveis</span>
        </div>

        <div>
          <button type="button" onClick={resetFilters}>
            Resetar filtros
          </button>
          <button
            type="button"
            onClick={() => onFilterSubmit()}
          >
            Aplicar filtros
          </button>
        </div>
      </main>
    </section>
  );
};
