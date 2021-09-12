import { useMemo, useState } from "react";
import { useRouter } from "next/router";
import { Table } from "../../components/Table";
import { Tab, TabItem, TabPanel } from "../../components/Tab";

export default function event() {
	const router = useRouter()
	const [activeTab, setActiveTab] = useState(0)

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
                Header: "Status",
                accessor: "bookingStatus"
            },
			{
                Header: "Actions",
                id: "actions",
				Cell: () => (
					<span>Teste</span>
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
                accessor: "link"
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
				<div className="flex flex-wrap md:flex-nowrap">
					<div className="w-full md:w-auto px-4">
						<label htmlFor="status_filter" className="block">Filtro</label>
						<select id="status_filter">
							<option>Filtrar por status</option>
							<option value="created">Criado</option>
							<option value="scheduled">Agendado</option>
							<option value="finished">Finalizado</option>
						</select>
					</div>
					<div className="w-full md:w-full px-4">
						<Table columns={slotTableColumns} />
					</div>
				</div>
			</TabPanel>

			<TabPanel index={2} value={activeTab}>
				<Table columns={scenaryTableColumns} />
			</TabPanel>
		</div>

	)
}
