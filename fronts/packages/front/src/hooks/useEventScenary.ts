import { useMemo } from "react"

export function useEventScenary(eventId: number) {
	const sceneries = useMemo(() => [
		{
			"id": 0,
			"title": "string",
			"license": "freeware",
			"link": "string",
			"simulator": "fs9"
		}
	], [])

	return {
		sceneries,
		isLoading: false,
		isError: false
	}
}
