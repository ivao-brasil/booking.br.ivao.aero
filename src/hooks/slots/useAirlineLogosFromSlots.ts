import { IocContext } from "context/IocContext";
import { useContext } from "react";
import { useQueries } from "react-query";
import { getSlotAirline, Slot } from "types/Slot";

export function useAirlineLogosFromSlots(slots: Slot[]) {
    const { apiClient } = useContext(IocContext);

    const airlineLogos = useQueries(
        slots.map(slot => {
            // Don't try to fetch airline logos for private flights
            // as we don't have an callsign list to ignore (ex: PTABC).
            if (slot.private) {
                return {
                    queryKey: ["private_logo"],
                    queryFn: () => Promise.resolve(null)
                }
            }

            const airlineIcao = getSlotAirline(slot);

            return {
                queryKey: ["airline_logo", airlineIcao],
                queryFn: () => apiClient.getAirlineLogo(airlineIcao),
                useErrorBoundary: false
            }
        })
    );

    return airlineLogos;
}
