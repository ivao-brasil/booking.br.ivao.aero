import { Checkbox } from "components/checkbox/Checkbox";
import { Progress } from "components/progress/Progress";
import { forwardRef, FunctionComponent, useEffect, useState } from "react";
import style from "./filter.module.css";
export interface FilterProps {
  aircrafts: Array<string>;
  airlines: Array<string>;
  onChange: (state: FilterState) => void;
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
  flightDuration: FlightDuration;
  onlyAvailableFlights: boolean;
}

export const Filter: FunctionComponent<FilterProps> = forwardRef<any, FilterProps>(({
  onChange,
  airlines,
  aircrafts,
}, ref) => {
  const [aircraft, setAircraft] = useState("");
  const [airline, setAirline] = useState("");
  const [flightDuration, setFlightDuration] = useState(
    FlightDuration.LESS_ONE_HOUR
  );
  const [onlyAvailableFlights, setOnlyAvailableFlights] = useState(false);

  const resetFilters = () => {
    setAircraft("");
    setAirline("");
    setFlightDuration(FlightDuration.LESS_ONE_HOUR);
    setOnlyAvailableFlights(false);
  };

  return (
    <section className={style.filter} ref={ref}>
      <header>Filtrar</header>
      <main>
        <div>
          <select
            value={aircraft}
            onChange={(event) => setAircraft(event.target.value)}
          >
            <option value="" disabled hidden>
              Aeronave
            </option>
            {aircrafts.map((aircraft) => (
              <option key={aircraft} value={aircraft}>
                {aircraft}
              </option>
            ))}
          </select>

          <select
            value={airline}
            onChange={(event) => setAirline(event.target.value)}
          >
            <option value="" disabled hidden>
              Companhia
            </option>
            {airlines.map((airline) => (
              <option key={airline} value={airline}>
                {airline}
              </option>
            ))}
          </select>
        </div>

        <div>
          <span>Duração do voo:</span>
          <Progress
            onChange={setFlightDuration}
            steps={[
              "Menor que 1 hora",
              "Até 3 horas",
              "Até 6 horas",
              "Maior que 6 horas",
            ]}
            value={flightDuration}
          />
        </div>

        <div>
          <Checkbox
            value={onlyAvailableFlights}
            onChange={(value) => setOnlyAvailableFlights(value)}
          />
          <span>Exibir somente voos disponíveis</span>
        </div>

        <div>
          <button type="button" onClick={resetFilters}>
            Resetar filtros
          </button>
          <button
            type="button"
            onClick={() => onChange({ aircraft, airline, flightDuration, onlyAvailableFlights })}
          >
            Aplicar filtros
          </button>
        </div>
      </main>
    </section>
  );
});
