import { AxiosError } from "axios";
import { useContext } from "react";
import { useInfiniteQuery } from "react-query";
import { ONE_DAY } from "appConstants";
import { IocContext } from "context/IocContext";
import { Slot } from "types/Slot";
import { Pagination } from "types/Pagination";
import { SlotTypeOptions } from "types/SlotFilter";
import { FilterState } from "components/filter/Filter";

export function useEventSlots(
	eventId: number,
	slotType?: SlotTypeOptions | null,
	filterState?: Partial<FilterState>,
	page = 1,
	perPage = 25,
) {
	const { apiClient } = useContext(IocContext);

	const slots = useInfiniteQuery<Pagination<Slot>, AxiosError>(
		['slots', eventId, (slotType ?? ""), (filterState ?? {})],
		async ({ pageParam = page, }) => {
			return await apiClient.getEventSlots(eventId, { page: pageParam, perPage }, slotType, filterState);
		},
		{
			staleTime: ONE_DAY,
			getNextPageParam: (lastPage, _) => {
				return (lastPage.page * lastPage.perPage) >= lastPage.total ? undefined : lastPage.page + 1;
			},
			getPreviousPageParam: (firstPage, _) => {
				return firstPage.page === 0 ? undefined : firstPage.page - 1;
			}
		}
	);

	return slots;
}
