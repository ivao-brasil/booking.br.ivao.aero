import { Fragment } from "react";
import { EventListLayout } from "layouts/EventListLayout/EventListLayout";
import { useEvents } from "hooks/useEventList";
import { EventCard } from "components/EventCard";
import { ActionButton } from "components/button/Button";
import { LoadingIndicator } from "components/LoadingIndicator";

export default function EventsPage() {
    const { data, isLoading, hasPreviousPage, hasNextPage, isFetchingNextPage, fetchNextPage } = useEvents();
    const totalFound = data?.pages[0].total || 0;

    if (isLoading && !hasPreviousPage) {
        return (
            <EventListLayout>
                <LoadingIndicator />
            </EventListLayout>
        );
    }

    const today = new Date();

    return (
        <EventListLayout>
            <p className="font-header text-light-gray-2 dark:text-white text-center md:text-left"><b>{totalFound} eventos</b> encontrados</p>
            <div className="mt-8 flex flex-col md:flex-row gap-12 xl:gap-24 items-center md:items-start flex-wrap">
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
                    {isFetchingNextPage ? <LoadingIndicator /> : (
                        <ActionButton content="Ver mais eventos" backgroundFilled={false} onClick={() => fetchNextPage()} />
                    )}
                </div>
            )}
        </EventListLayout >
    );
}
