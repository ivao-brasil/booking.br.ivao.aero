export const Table: React.FC = ({ children }) => (
	<table className="w-full divide-y divide-gray-200">
		{children}
	</table>
)

export const TableRow: React.FC = ({ children }) => (
	<tr className="border-b-2">
		{children}
	</tr>
)

export const TableHeader: React.FC = ({ children }) => (
	<thead className="bg-gray-50">
		{children}
	</thead>
)

export const TableColumn: React.FC = ({ children }) => (
	<th className="font-medium text-left py-2 pr-4">
		{children}
	</th>
)

export const TableItem: React.FC = ({ children }) => (
	<td className="py-2 pr-2">
		{children}
	</td>
)
