import { Fragment } from "react";
import { EventListLayout } from "layouts/EventListLayout/EventListLayout";
import { EventCard } from "components/EventCard";
import { useEvents } from "hooks/useEventList";
import { ActionButton } from "components/button/Button";

export default function EventsPage() {
    const { data, isLoading, hasPreviousPage, hasNextPage, isFetchingNextPage, fetchNextPage } = useEvents(0, 3);
    const totalFound = data?.pages[0].total || 0;

    if (isLoading && !hasPreviousPage) {
        return (
            <EventListLayout>
                <p>Loading...</p>
            </EventListLayout>
        );
    }

    const today = new Date();

    return (
        <EventListLayout>
            <p className="font-header text-light-gray-2 dark:text-white text-center md:text-left"><b>{totalFound} eventos</b> encontrados</p>
            <div className="mt-8 flex flex-col md:flex-row gap-7 justify-between items-center md:items-start flex-wrap">
                {data?.pages.map(eventPage => (
                    <Fragment key={eventPage.page}>
                        {eventPage.data.map((event) => {
                            const eventStartDate = new Date(event.dateStart);
                            const hasStarted = today > eventStartDate;

                            return (
                                <Fragment key={event.id}>
                                    <EventCard
                                        eventId={event.id}
                                        imageSrc={event.banner}
                                        eventName={event.eventName}
                                        eventType="Evento Divisional"
                                        description={event.description}
                                        tbd={!hasStarted} />
                                </Fragment>
                            )

                        })}
                    </Fragment>
                ))}
            </div>
            {(hasNextPage) && (
                <div className="flex justify-center mt-8">
                    {isFetchingNextPage ? <p>Loading...</p> : (

                        <ActionButton content="Ver mais eventos" backgroundFilled={false} onClick={() => fetchNextPage()} />
                    )}
                </div>
            )}
        </EventListLayout >
    );
}
