import { HorizontalInfoCard, VerticalInfoCard } from "components/InfoCard";
import { LoadingIndicator } from "components/LoadingIndicator";
import { Header, Subheader } from "components/typography/Typography";
import { useEvent } from "hooks/useEvent";
import { useEventSceneries } from "hooks/useEventSceneries";
import { Fragment, useMemo } from "react";
import { FiHeadphones, FiMap } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { getEventTypeName } from "types/Event";
import { Scenary } from "types/Scenary";

export default function EventDetailsPage() {
    const { eventId } = useParams();
    const { data: event, isLoading: isLoadingEvent } = useEvent(Number(eventId));

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

    const sceneriesBySimulator = useMemo(() => {
        if (!event?.airports) {
            return null;
        }

        const simulatorMap: Map<string, Scenary[]> = new Map();

        event.airports.forEach(airport => {
            console.log(airport.sceneries);
            airport.sceneries.forEach(scenary => {
                console.log(scenary);
                const currentSimulatorItems = simulatorMap.get(scenary.simulator);

                if (currentSimulatorItems === undefined) {
                    simulatorMap.set(scenary.simulator, [scenary]);
                } else {
                    currentSimulatorItems.push(scenary);
                    simulatorMap.set(scenary.simulator, currentSimulatorItems);
                }
            });
        });

        return simulatorMap;
    }, [event?.airports]);

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

                <div className="flex flex-col md:flex-row gap-7 items-center md:items-start flex-wrap mt-4">
                    {/* {isLoadingScenaries && (
                        <div className="relative w-full mt-5">
                            <LoadingIndicator />
                        </div>
                    )} */}
                    {sceneriesBySimulator && Object.entries(sceneriesBySimulator).map(([simulator, sceneries]) => {
                        <Fragment key={simulator}>
                            <VerticalInfoCard
                                header={simulator.toUpperCase()}
                                content="ABC">

                            </VerticalInfoCard>
                        </Fragment>
                    })}
                </div>
            </div>
        </div>
    );
}
