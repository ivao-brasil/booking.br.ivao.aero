import { IocContext } from "context/IocContext";
import { useContext } from "react";
import { useQueries } from "react-query";
import { getSlotAirline, Slot } from "types/Slot";

export function useAirlineLogosFromSlots(slots: Slot[]) {
    const { apiClient } = useContext(IocContext);

    return useQueries(
        slots.map(slot => {
            if (!slot.flightNumber) {
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
}
