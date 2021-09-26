import { useMemo } from "react"

export function useEvent(id?: number | string | undefined) {
	let event

	if (!id || id === "new") {
		event = useMemo(() =>
		({
			"dateStart": "",
			"dateEnd": "",
			"eventName": "",
			"privateSlots": true,
			"pilotBriefing": "",
			"atcBriefing": "",
			"description": "",
			"banner": "",
			"atcBooking": ""
		}), [id])
	} else {
		event = useMemo(() =>
		({
			"dateStart": "12/09/2021 00:00",
			"dateEnd": "13/09/2021 00:00",
			"eventName": "Teste",
			"privateSlots": true,
			"pilotBriefing": "",
			"atcBriefing": "",
			"description": "Teste22",
			"banner": "",
			"atcBooking": "",
			"id": id
		}), [id])
	}

	return {
		event,
		isLoading: false,
		isError: false
	}
}
