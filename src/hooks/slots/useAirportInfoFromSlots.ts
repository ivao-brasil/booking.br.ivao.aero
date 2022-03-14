import { IocContext } from "context/IocContext";
import { useContext, useMemo } from "react";
import { useQueries } from "react-query";
import { Slot } from "types/Slot";

export function useAirportInfoFromSlots(slots: Slot[]) {
    const { apiClient } = useContext(IocContext);

    const uniqueAirportIcaoList = useMemo(() => {
        const airportMap: Record<string, boolean> = {};

        slots.forEach((slot) => {
            if (airportMap[slot.origin] && airportMap[slot.destination]) {
                return;
            }

            if (airportMap[slot.origin] === undefined && slot.origin) {
                airportMap[slot.origin] = true;
            }

            if (airportMap[slot.destination] === undefined && slot.destination) {
                airportMap[slot.destination] = true;
            }
        });

        return Object.keys(airportMap);
    }, [slots]);

    const airportDetails = useQueries(
        uniqueAirportIcaoList.map(icao => {
            return {
                queryKey: ["airport", icao],
                queryFn: () => apiClient.getAirportDetails(icao),
                useErrorBoundary: false
            }
        }),
    );

    return airportDetails;
}
