import { AxiosError } from "axios";
import { useContext } from "react";
import { useInfiniteQuery } from "react-query";
import { ONE_DAY } from "appConstants";
import { IocContext } from "context/IocContext";
import { Slot } from "types/Slot";
import { Pagination } from "types/Pagination";

export function useEventUserSlots(eventId: number, page = 1, perPage = 25) {
	const { apiClient } = useContext(IocContext);

    const slots = useInfiniteQuery<Pagination<Slot>, AxiosError>(['eventUserSlots', eventId], async ({ pageParam = page }) => {
		return await apiClient.getUserSlots({ page: pageParam, perPage });
	}, {
		staleTime: ONE_DAY,
		getNextPageParam: (lastPage, _) => {
			return (lastPage.page * lastPage.perPage) >= lastPage.total ? undefined : lastPage.page + 1;
		},
		getPreviousPageParam: (firstPage, _) => {
			return firstPage.page === 0 ? undefined : firstPage.page - 1;
		}
	});

    return slots;
}