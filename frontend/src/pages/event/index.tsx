import { Table, TableHeader, TableColumn, TableItem, TableRow } from "../../components/Table";

export default function events() {
    return (
        <div className="flex flex-wrap md:flex-nowrap">
            <div className="w-full md:w-auto px-4">
                <div>
                    <label htmlFor="status_filter" className="block">Filtro</label>
                    <select id="status_filter">
                        <option>Filtrar por status</option>
                        <option value="created">Criado</option>
                        <option value="scheduled">Agendado</option>
                        <option value="finished">Finalizado</option>
                    </select>
                </div>
            </div>
            <div className="w-full md:w-full px-4">
                <h1>Lista de eventos</h1>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableColumn>Data de início</TableColumn>
                            <TableColumn>Nome</TableColumn>
                            <TableColumn>Slots privados?</TableColumn>
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
        </div>
    )
}
