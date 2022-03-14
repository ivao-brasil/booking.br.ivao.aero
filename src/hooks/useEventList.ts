import { useContext } from 'react';
import { AxiosError } from 'axios';
import { useInfiniteQuery } from 'react-query';
import { ONE_DAY } from "appConstants";
import { IocContext } from 'context/IocContext';
import { Event } from "types/Event";
import { Pagination } from 'types/Pagination';

export const useEvents = (page = 1, perPage = 6) => {
	const { apiClient } = useContext(IocContext);

	const eventList = useInfiniteQuery<Pagination<Event>, AxiosError>('events', async ({ pageParam = page }) => {
		return await apiClient.getEvents({ page: pageParam, perPage });
	}, {
		staleTime: ONE_DAY,
		getNextPageParam: (lastPage, _) => {
			return (lastPage.page * lastPage.perPage) >= lastPage.total ? undefined : lastPage.page + 1;
		},
		getPreviousPageParam: (firstPage, _) => {
			return firstPage.page === 0 ? undefined : firstPage.page - 1;
		}
	});

	return eventList;
};
