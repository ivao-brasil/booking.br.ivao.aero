import { Table } from "components/Table";
import { useEventList } from "hooks/useEventList";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";

export default function EventList() {
    const { events } = useEventList()

    const eventListColumns = useMemo(
        () => [
            {
                Header: "Name",
                accessor: "eventName"
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
            },
            {
                id: "actions",
                Cell: ({ row }: any) => {
                    const itemId: number = row.original.id
                    return (
                        <>
                            <Link to={`/admin/event/${itemId}`}>Edit</Link>
                        </>
                    )
                }
            }
        ],
        []
    )

    return (
        <div className="flex flex-wrap md:flex-nowrap">
            <div className="w-full md:w-3/12 px-4">
                <Link to="/admin/event/new">Create an event</Link>
                <Link to="/admin/eventSlots">Add slots to an event</Link>
            </div>
            <div className="w-full md:w-full px-4">
                <h1>Lista de eventos</h1>
                <Table columns={eventListColumns} items={events} />
            </div>
        </div>
    )
}
