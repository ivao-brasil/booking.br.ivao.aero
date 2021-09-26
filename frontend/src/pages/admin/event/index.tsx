import Link from "next/link";
import React, { useMemo } from "react";
import { Table } from "@/components/Table";
import { useEventList } from "@/hooks/useEventList";
import InlineLink from "@/components/InlineLink";
import { DefaultButton } from "@/components/Button";

export default function adminEventList() {
    const { events } = useEventList()

    const eventListColumns = useMemo(
        () => [
            {
                Header: "Name",
                accessor: "eventName",
                Cell: ({ row, value }) => {
                    const itemId: number = row.original.id
                    return <Link href={`/admin/event/${itemId}`}>{value}</Link>
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
            <div className="w-full md:w-2/12 px-4">
                <Link href="/admin/event/new" passHref>
                    <DefaultButton>Create an event</DefaultButton>
                </Link>
                <Link href="/admin/eventSlots" passHref>
                    <DefaultButton>Add slots to an event</DefaultButton>
                </Link>
            </div>
            <div className="w-full md:w-full px-4">
                <h1>Lista de eventos</h1>
                <Table columns={eventListColumns} items={events} />
            </div>
        </div>
    )
}
