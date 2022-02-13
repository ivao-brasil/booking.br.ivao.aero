import { Fragment, useMemo } from "react";
import { useParams } from "react-router-dom";
import { FiHeadphones, FiMap } from "react-icons/fi";
import { useEvent } from "hooks/useEvent";
import { useEventSceneries } from "hooks/useEventSceneries";
import { LoadingIndicator } from "components/LoadingIndicator/LoadingIndicator";
import { Header, Subheader } from "components/typography/Typography";
import { HorizontalInfoCard, VerticalInfoCard } from "components/InfoCard";
import { LinkButton } from "components/button/Button";
import { getEventTypeName } from "types/Event";

export default function EventDetailsPage() {
    const { eventId } = useParams();
    const { data: event, isLoading: isLoadingEvent } = useEvent(Number(eventId));
    const { data: scenaries, isLoading: isLoadingScenaries } = useEventSceneries(Number(eventId));

    const startDate = useMemo(() => {
        if (!event?.dateStart) {
            return;
        }

        const date = new Date(event.dateStart);
        return date.toLocaleDateString([], { day: "numeric", month: "long" });
    }, [event]);

    const timeRange = useMemo(() => {
        if (!event?.dateStart || !event?.dateEnd) {
            return;
        }

        const startDate = new Date(event.dateStart);
        const endDate = new Date(event.dateEnd);

        const startTime = [startDate.getUTCHours(), startDate.getUTCMinutes()].map((timePart => {
            return timePart < 10 ? "0" + timePart : timePart.toString();
        }));

        const endTime = [endDate.getUTCHours(), endDate.getUTCMinutes()].map((timePart => {
            return timePart < 10 ? "0" + timePart : timePart.toString();
        }));

        return `${startTime.join("")}z - ${endTime.join("")}z`
    }, [event]);

    if (isLoadingEvent || !event) {
        return (
            <LoadingIndicator />
        )
    }

    return (
        <div className="mt-[4.3rem]">
            <div className="flex flex-col md:flex-row">
                <div>
                    <Header textSize="text-xl" textColor="text-blue dark:text-yellow">{event.eventName}</Header>
                    <Subheader textSize="text-lg" textColor="text-light-blue dark:text-white">{getEventTypeName(event.type)}</Subheader>
                </div>
                <div className="md:text-right md:ml-auto text-dark-gray-3 dark:text-light-gray-5">
                    <span className="block font-header text-[1.1rem] font-extrabold text-blue dark:text-white">SBGR</span>
                    <span className="block font-header">
                        {startDate}<br />
                        {timeRange}
                    </span>
                </div>
            </div>


            <div className="flex flex-wrap justify-between mt-7 space-y-4 lg:space-y-0">
                <p className="max-w-lg font-action text-justify">{event.description}</p>
                <div className="flex flex-col gap-7">
                    <a href={event.pilotBriefing} target="_blank" rel="noreferrer">
                        <HorizontalInfoCard
                            icon={<FiMap size={25} />}
                            iconBackground="bg-blue"
                            header="Briefing do Piloto"
                            content="Este documento objetiva orientar os pilotos e tripulação sobre os procedimentos específicos esperados para este evento. A leitura é fundamental." />
                    </a>

                    <a href={event.atcBooking} target="_blank" rel="noreferrer">
                        <HorizontalInfoCard
                            icon={<FiHeadphones size={25} />}
                            iconBackground="bg-green"
                            header="Briefing do Controlador de Voo"
                            content="Este documento objetiva orientar os controladores sobre os procedimentos específicos esperados para este evento. A leitura é fundamental." />
                    </a>
                </div>
            </div>

            <div className="mt-7">
                <Header textSize="text-lg">Cenários</Header>
                <Subheader>Encontre aqui os cenários recomendados para este evento.</Subheader>

                {isLoadingScenaries && (
                    <div className="relative mt-16">
                        <LoadingIndicator />
                    </div>
                )}
                {/* TODO #63 */}
                {/* <div className="flex flex-col md:flex-row gap-7 items-center md:items-start flex-wrap mt-4">
                        {scenaries && scenaries.map((scenary) => (
                        <Fragment key={scenary.id}>
                            <VerticalInfoCard
                                header={scenary.simulator.toUpperCase()}
                                content={scenary.title}>
                                <LinkButton href={scenary.link} content={(
                                    <span className={`block px-8 py-2.5 text-center font-action text-xs font-semibold text-light-gray-2 dark:text-white truncate`}>
                                        {scenary.license}
                                    </span>
                                )} />
                            </VerticalInfoCard>
                        </Fragment>
                    ))}
                    </div> */}
            </div>
        </div>
    );
}
