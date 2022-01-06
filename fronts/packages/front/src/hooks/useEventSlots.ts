import { useMemo } from "react"

export function useEventSlots(eventId: number) {
	const slots = useMemo(() => [
		{
			"id": 0,
			"origin": "string",
			"destination": "string",
			"type": "takeoff",
			"private": "true",
			"slotTime": "string",
			"gate": "string",
			"aircraft": "string",
			"owner": {
				"vid": "string",
				"firstName": "string",
				"lastName": "string",
				"atcRating": 0,
				"pilotRating": 0,
				"division": "string",
				"country": "string"
			},
			"bookingTime": "string",
  			"bookingStatus": "free"
		}
	], [])

	return {
		slots,
		isLoading: false,
		isError: false
	}
}
