import { useRouter } from "next/router";
import { Table, TableHeader, TableColumn, TableItem, TableRow } from "../../components/Table";
import { ApiClient } from "../../clients/api.client";
import { Tab, TabItem } from "../../components/Tab";

export default function event() {
	const api = new ApiClient()
	const router = useRouter()
	const { id } = router.query

	if (Array.isArray(id)) {
		throw Error("Invalid route param type: " + typeof id)
	}

	const event = api.fetchEvent(id)

	return (
		<div className="w-3/4 mx-auto">
			<h1>Evento</h1>

			<Tab>
				<TabItem>a</TabItem>
				<TabItem>a</TabItem>
			</Tab>
			<p>{JSON.stringify(event)}</p>

			<Table>
				<TableHeader>
					<TableRow>
						<TableColumn>Origin</TableColumn>
						<TableColumn>Destination</TableColumn>
						<TableColumn>Private Slots?</TableColumn>
						<TableColumn>Data de término</TableColumn>
						<TableColumn>Status</TableColumn>
					</TableRow>
				</TableHeader>
				<tbody>
					<TableRow>
						<TableItem>A</TableItem>
						<TableItem>B</TableItem>
						<TableItem>C</TableItem>
						<TableItem>D</TableItem>
						<TableItem>E</TableItem>
					</TableRow>
					<TableRow>
						<TableItem>A</TableItem>
						<TableItem>B</TableItem>
						<TableItem>C</TableItem>
						<TableItem>D</TableItem>
						<TableItem>E</TableItem>
					</TableRow>
				</tbody>
			</Table>
		</div>

	)
}
