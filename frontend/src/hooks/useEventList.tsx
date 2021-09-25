import { useMemo } from 'react'
import useSWR from 'swr'

export function useEventList(memberId ?: number) {
	const events = useMemo(() => [
		{
			"id": 1,
			"division": "BR",
			"dateStart": "12/09/2021 00:00",
			"dateEnd": "13/09/2021 00:00",
			"eventName": "Teste",
			"privateSlots": true,
			"status": "created"
		},
		{
			"id": 2,
			"division": "BR",
			"dateStart": "12/09/2021 00:00",
			"dateEnd": "13/09/2021 00:00",
			"eventName": "ABC",
			"privateSlots": true,
			"status": "scheduled"
		}
	], [])

	return {
		events,
		isLoading: false,
		isError: false
	}
}
