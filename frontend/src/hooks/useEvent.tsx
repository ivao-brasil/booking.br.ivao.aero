import { useMemo } from "react"

export function useEvent(id: number) {
	const event = useMemo(() =>
	({
		"id": id,
		"division": "BR",
		"dateStart": "12/09/2021 00:00",
		"dateEnd": "13/09/2021 00:00",
		"eventName": "Teste",
		"privateSlots": true,
		"status": "created"
	}), [])

	return {
		event,
		isLoading: false,
		isError: false
	}
}
