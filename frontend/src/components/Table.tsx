import { useMemo, useState } from 'react';
import { Column, Row, RowPropGetter, TableState, useGlobalFilter, useSortBy, useTable } from 'react-table'

interface TableProps {
	columns: Column[]
	items?: object[],
	initialState?: Partial<TableState>
	getRowProps ?: (row: Row) => RowPropGetter<object>
}

function debounce(func: Function, timeout = 300) {
	let timer: NodeJS.Timeout;
	return (...args: any) => {
		clearTimeout(timer);
		timer = setTimeout(() => { func.apply(this, args); }, timeout);
	};
}

function GlobalFilter({ globalFilter, setGlobalFilter }) {
	const [value, setValue] = useState(globalFilter);
	const onChange = debounce(((value: string) => {
		setGlobalFilter(value || undefined)
	}), 200);

	return (
		<input
			className="w-full my-3 py-1 px-2 shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
			value={value || ""}
			onChange={e => {
				setValue(e.target.value);
				onChange(e.target.value);
			}}
			placeholder={`Search`}
		/>
	)
}

export function Table({ columns, items, initialState, getRowProps }: TableProps) {
	const defaultItem: object[] = useMemo(() => [], [])
	const defaultGetter = () => ({})

	if (typeof getRowProps === "undefined") {
		getRowProps = defaultGetter
	}

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		state,
		setGlobalFilter,
	} = useTable({ columns, data: items ?? defaultItem, initialState }, useGlobalFilter, useSortBy)

	return (
		<>
			<GlobalFilter
				globalFilter={state.globalFilter}
				setGlobalFilter={setGlobalFilter}
			/>
			<div className="overflow-x-auto">
				<table className="w-full divide-y divide-gray-200" {...getTableProps()}>
					<TableHeader>
						{headerGroups.map(headerGroup => (
							<TableRow {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map(column => (
									<TableColumn {...column.getHeaderProps()} {...column.getSortByToggleProps()}>
										{column.render('Header')}
										<span>
											{column.isSorted && (column.isSortedDesc ? ' ⬇️' : ' ⬆️')}
										</span>
									</TableColumn>
								))}
							</TableRow>
						))}
					</TableHeader>
					<tbody {...getTableBodyProps()}>
						{rows.map(row => {
							prepareRow(row)
							return (
								<TableRow {...row.getRowProps(getRowProps(row))}>
									{row.cells.map(cell => (
										<TableItem {...cell.getCellProps()}>{cell.render('Cell')}</TableItem>
									))}
								</TableRow>
							)
						})}
					</tbody>
				</table>
			</div>
		</>
	)
}

const TableRow: React.FunctionComponent = ({ children, ...props }) => (
	<tr className="border-b-2" {...props}>
		{children}
	</tr>
)

const TableHeader: React.FunctionComponent = ({ children, ...props }) => (
	<thead className="bg-gray-50" {...props}>
		{children}
	</thead>
)

const TableColumn: React.FunctionComponent = ({ children, ...props }) => (
	<th className="font-medium text-left py-2 pr-4" {...props}>
		{children}
	</th>
)

const TableItem: React.FunctionComponent = ({ children, ...props }) => (
	<td className="py-2 pr-2" {...props}>
		{children}
	</td>
)
