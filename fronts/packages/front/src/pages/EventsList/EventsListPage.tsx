import { Fragment } from "react";
import { EventListLayout } from "layouts/EventListLayout/EventListLayout";
import { useEvents } from "hooks/useEventList";
import { EventCard } from "components/EventCard";
import { ActionButton } from "components/button/Button";
import { LoadingIndicator } from "components/LoadingIndicator/LoadingIndicator";
import { getEventTypeName } from "types/Event";

export default function EventsListPage() {
    const { data, isLoading, hasPreviousPage, hasNextPage, isFetchingNextPage, fetchNextPage } = useEvents();
    const totalFound = data?.pages[0].total || 0;

    if (isLoading && !hasPreviousPage) {
        return (
            <EventListLayout>
                <LoadingIndicator />
            </EventListLayout>
        );
    }

    return (
        <EventListLayout>
            <p className="font-header text-light-gray-2 dark:text-white text-center md:text-left"><b>{totalFound} eventos</b> encontrados</p>
            <div className="mt-8 flex flex-col md:flex-row gap-12 xl:gap-24 items-center md:items-start flex-wrap">
                {data?.pages.map(eventPage => (
                    <Fragment key={eventPage.page}>
                        {eventPage.data.map((event) => {
                            return (
                                <Fragment key={event.id}>
                                    <EventCard
                                        eventId={event.id}
                                        imageSrc={event.banner}
                                        eventName={event.eventName}
                                        eventType={getEventTypeName(event.type)}
                                        description={event.description}
                                        tbd={event.status === "created"} />
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
