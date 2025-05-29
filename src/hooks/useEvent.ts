import {useContext} from "react";
import {AxiosError} from "axios";
import {useQuery} from "react-query";
import {ONE_DAY} from "appConstants";
import {IocContext} from "context/IocContext";
import {Event} from "types/Event";

export function useEvent(id: number) {
  const {apiClient} = useContext(IocContext);
  const EVENT_DETAIL_KEY = ["event", id];

  const eventData = useQuery<Event, AxiosError>(EVENT_DETAIL_KEY, async () => await apiClient.getEvent(id),
    {
      staleTime: ONE_DAY
    });

  return eventData;

}
