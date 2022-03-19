import { Fragment } from "react";
import { EventListLayout } from "layouts/EventListLayout/EventListLayout";
import { useEvents } from "hooks/useEventList";
import { EventCard } from "components/event/EventCard";
import { ActionButton } from "components/button/Button";
import { LoadingIndicator } from "components/LoadingIndicator/LoadingIndicator";
import { getEventTypeName } from "types/Event";
import { useText } from "hooks/useText";
import { Translations } from "types/Translations";

export default function EventsListPage() {
    const { t } = useText();
    const { data, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } = useEvents();
    const totalFound = data?.pages[0].total || 0;

    return (
        <EventListLayout>
            {isLoading ? <LoadingIndicator /> : (
                <>
                    <p className="font-header text-light-gray-2 dark:text-white text-center md:text-left"> { t('events.found' as unknown as keyof Translations, {count: totalFound}) } </p>
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
                </>
            )}
        </EventListLayout >
    );
}
