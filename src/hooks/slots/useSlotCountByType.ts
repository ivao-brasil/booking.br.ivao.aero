import { useContext } from "react";
import { IocContext } from "context/IocContext";
import { useQuery } from "react-query";
import { ONE_DAY } from "appConstants";

export function useSlotCountByType(eventId: number) {
    const { apiClient } = useContext(IocContext);

    const slotCount = useQuery(
        ['slotCount', eventId],
        async () => await apiClient.getSlotCountByType(eventId),
        {
            staleTime: ONE_DAY * 5
        }
    );

    return slotCount;
}