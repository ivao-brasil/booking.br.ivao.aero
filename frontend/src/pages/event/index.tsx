import Link from "next/link";
import React, { useMemo } from "react";
import { Table } from "../../components/Table";
import { useEventList } from "../../hooks/useEventList";

export default function eventList() {
    const { events } = useEventList()

    const eventListColumns = useMemo(
        () => [
            {
                Header: "Name",
                accessor: "eventName",
                Cell: ({ row, value }) => {
                    const itemId: number = row.original.id
                    return <Link href={`/event/${itemId}`}>{value}</Link>
                }
            },
            {
                Header: "Start date",
                accessor: "dateStart"
            },
            {
                Header: "End date",
                accessor: "dateEnd"
            },
            {
                Header: "Status",
                accessor: "status"
            }
        ],
        []
    )

    return (
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
                <h1>Lista de eventos</h1>
                <Table columns={eventListColumns} items={events} />
            </div>
        </div>
    )
}
