import { useMemo, useState } from "react";
import { useRouter } from "next/router";
import { Table } from "../../components/Table";
import { Tab, TabItem, TabPanel } from "../../components/Tab";
import { useEvent } from "../../hooks/useEvent";
import { useEventSlots } from "../../hooks/useEventSlots";
import { DefaultButton } from "../../components/Button";
import { useEventScenary } from "../../hooks/useEventScenary";
import InlineLink from "../../components/InlineLink";

export default function event() {
	const router = useRouter()
	const [activeTab, setActiveTab] = useState(0)
	const { event } = useEvent(1)
	const { slots } = useEventSlots(1)
	const { sceneries } = useEventScenary(1)

	const handleChange = (_event: any, newValue: number) => {
		setActiveTab(newValue);
	};

	const { id } = router.query
	if (Array.isArray(id)) {
		throw Error("Invalid route param type: " + typeof id)
	}

	const slotTableColumns = useMemo(
        () => [
			{
                Header: "Type",
                accessor: "type"
            },
			{
                Header: "Origin",
                accessor: "origin"
            },
			{
                Header: "Destination",
                accessor: "destination"
            },
			{
                Header: "Private?",
                accessor: "private"
            },
			{
                Header: "Slot Time",
                accessor: "slotTime"
            },
			{
                Header: "Gate",
                accessor: "gate"
            },
			{
                Header: "Aircraft",
                accessor: "aircraft"
            },
			{
                id: "actions",
				Cell: () => (
					<DefaultButton>Book</DefaultButton>
				),
            }
        ],
        []
    )

	const scenaryTableColumns = useMemo(
        () => [
			{
                Header: "Name",
                accessor: "title"
            },
			{
                Header: "License",
                accessor: "license"
            },
			{
                Header: "Simulator",
                accessor: "simulator"
            },
			{
                Header: "Link",
                accessor: "link",
				Cell: ({ value }) => (
					<InlineLink href={value}>Go to site</InlineLink>
				),
            }
        ],
        []
    )

	return (
		<div className="w-full px-1 md:w-5/6 md:px-0 mx-auto">
			<h1>Evento</h1>

			<Tab onChange={handleChange}>
				<TabItem>Details</TabItem>
				<TabItem>Slots</TabItem>
				<TabItem>Scenary</TabItem>
			</Tab>

			<TabPanel index={0} value={activeTab}>
				{/* Details */}
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at sagittis purus, sed ullamcorper augue.
					Pellentesque pharetra diam quis elementum mollis. Etiam interdum mauris risus, ut interdum lacus dictum ac.
					Morbi aliquam tellus vel lorem laoreet, at porttitor lectus semper.
					In quis dolor vitae lectus eleifend rhoncus vitae sit amet quam.
					Phasellus sit amet consequat tellus, in interdum justo. Integer malesuada ligula vitae purus scelerisque egestas.
					Sed ac pellentesque augue. Nulla venenatis imperdiet eros, sed finibus mauris volutpat sed.
					Donec posuere lorem ac mattis pellentesque. Quisque non risus massa.
				</p>
			</TabPanel>

			<TabPanel index={1} value={activeTab}>
				{/* Slots */}
				<div className="w-full md:w-full px-4">
					<Table columns={slotTableColumns} items={slots} />
				</div>
			</TabPanel>

			<TabPanel index={2} value={activeTab}>
				{/* Scenary */}
				<Table columns={scenaryTableColumns} items={sceneries} />
			</TabPanel>
		</div>

	)
}
