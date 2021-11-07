import SelectBox, { SelectedItemChange } from "components/SelectBox"
import { useEventList } from "hooks/useEventList"

export default function EventSlots() {
	const { events } = useEventList()

	const onEventSelectChanged = (changes: SelectedItemChange<any>) => {
		console.log(changes)
	}

	return (
		<>
			<p>TODO</p>
			<SelectBox id="a" items={events.map(item => item.id)} onSelectedItemChange={onEventSelectChanged} />
		</>
	)
}
