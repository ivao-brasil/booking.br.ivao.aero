import { useContext } from "react"
import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { IocContext } from "context/IocContext";
import { Scenary } from "types/Scenary";

export function useEventSceneries(eventId: number) {
	const { apiClient } = useContext(IocContext);

    const scenaries = useQuery<Scenary[], AxiosError>(["scenary", eventId], async() => await apiClient.getEventSceneries(eventId));
    return scenaries;
}
