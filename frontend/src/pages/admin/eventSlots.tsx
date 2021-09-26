import SelectBox from "@/components/SelectBox"
import { useEventList } from "@/hooks/useEventList"

export default function adminEventSlots() {
	const { events } = useEventList()

	return (
		<>
			<p>TODO</p>
			<SelectBox items={events} />
		</>
	)
}
