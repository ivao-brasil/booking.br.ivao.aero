import { useContext } from "react";
import { AxiosError } from "axios";
import { InfiniteData, useQuery, useQueryClient } from "react-query";
import { ONE_DAY } from "appConstants";
import { IocContext } from "context/IocContext";
import { Event } from "types/Event";
import { Pagination } from "types/Pagination";

export function useEvent(id: number) {
	const { apiClient } = useContext(IocContext);
	const queryClient = useQueryClient();
	const EVENT_LIST_KEY = "events";

	const eventData = useQuery<Event, AxiosError>(["event", id], async () => await apiClient.getEvent(id),
		{
			staleTime: ONE_DAY,
			initialData: () => {
				const eventListQuery = queryClient.getQueryData<InfiniteData<Pagination<Event>>>(EVENT_LIST_KEY);
				let fetechedEvent = undefined;

				eventListQuery?.pages.forEach(page => {
					page.data.forEach(event => {
						if (event.id === id) {
							fetechedEvent = event;
						}
					});
				});

				return fetechedEvent;
			},
			initialDataUpdatedAt: () => queryClient.getQueryState(EVENT_LIST_KEY)?.dataUpdatedAt
		});

	return eventData;

}
