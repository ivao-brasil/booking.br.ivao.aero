import { useEffect, useState } from "react"

interface FormValues {
	id?: string | number
	dateStart: string,
	dateEnd: string,
	eventName: string,
	privateSlots: boolean,
	pilotBriefing: string,
	atcBriefing: string,
	description: string,
	banner: string,
	atcBooking: string
}

export function useEvent(id?: number | string | undefined) {
	const [event, setEvent] = useState<FormValues>({
		"dateStart": "",
		"dateEnd": "",
		"eventName": "",
		"privateSlots": true,
		"pilotBriefing": "",
		"atcBriefing": "",
		"description": "",
		"banner": "",
		"atcBooking": ""
	})

	useEffect(() => {
		if (id && id !== "new") {
			const event: FormValues = {
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
			}

			console.log(event)
			setEvent(event)
		}
	}, [id])

	return {
		event,
		isLoading: false,
		isError: false
	}
}
