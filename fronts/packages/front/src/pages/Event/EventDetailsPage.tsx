import { DropdownButton } from "components/button/DropdownButton";
import { HorizontalInfoCard, VerticalInfoCard } from "components/InfoCard";
import { LoadingIndicator } from "components/LoadingIndicator/LoadingIndicator";
import { Header, Subheader } from "components/typography/Typography";
import { useEvent } from "hooks/useEvent";
import { Fragment, useMemo } from "react";
import { FiHeadphones, FiMap } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { getEventTypeName } from "types/Event";
import { Scenary, ScenarySimulators } from "types/Scenary";

type EventScenaries = {
    [simulator in ScenarySimulators]?: {
        [key in "freeware" | "payware"]: Scenary[]
    }
}

const scenaryCardContent: Record<ScenarySimulators, string> = {
    "fs9": "",
    "fsx": "Microsoft Flight Simulator X (abreviado como FSX) é um simulador de voo de 2006, originalmente desenvolvido pela Aces Game Studio e publicado pela Microsoft Game Studios para Microsoft Windows.",
    "p3d": "Prepar3D é uma plataforma de simulação visual que permite aos usuários criar cenários de treinamento em domínios de aviação, marítimo e terrestre.",
    "xp11": "X-Plane 11 é o simulador detalhado, realista e moderno. Interface de usuário intuitiva, cockpits 3D, novos efeitos, som 3D, aeroportos vivos e cenário mundial.",
    "msfs": "",
}

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

    const eventScenaries = useMemo(() => {
        if (!event?.airports) {
            return {};
        }

        const scenaries: EventScenaries = {};
        event.airports.forEach(airport => {
            airport.sceneries.forEach(scenary => {
                if (!scenaries[scenary.simulator]) {
                    scenaries[scenary.simulator] = {
                        "freeware": [],
                        "payware": []
                    }
                }

                scenaries[scenary.simulator]?.[scenary.license].push(scenary);
            });
        });

        return scenaries;
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
                    <span className="block font-header text-[1.1rem] font-extrabold text-blue dark:text-white">
                        {event.airports.reduce<string[]>((acc, airport) => {
                            return [...acc, airport.icao];
                        }, []).join(", ")}
                    </span>
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
                    {Object.entries(eventScenaries).map(([simulator, scenariesByLicence]) => (
                        <Fragment key={simulator}>
                            <VerticalInfoCard
                                header={simulator.toUpperCase()}
                                content={scenaryCardContent[simulator as ScenarySimulators]}
                            >
                                <div className="flex justify-between">
                                    {scenariesByLicence["freeware"].length > 0 && (
                                        <DropdownButton text="Freeware">
                                            {scenariesByLicence["freeware"].map(scenary => (
                                                <a href={scenary.license} key={scenary.id} rel="noreferrer" target="_blank">
                                                    {scenary.title}
                                                </a>
                                            ))}
                                        </DropdownButton>
                                    )}
                                    {scenariesByLicence["payware"].length > 0 && (
                                        <DropdownButton text="Payware">
                                            {scenariesByLicence["payware"].map(scenary => (
                                                <a href={scenary.license} key={scenary.id} rel="noreferrer" target="_blank">
                                                    {scenary.title}
                                                </a>
                                            ))}
                                        </DropdownButton>
                                    )}
                                </div>
                            </VerticalInfoCard>
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}
