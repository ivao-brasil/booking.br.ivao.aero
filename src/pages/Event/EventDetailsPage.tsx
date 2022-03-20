import { render } from "@testing-library/react";
import { DropdownButton } from "components/button/DropdownButton";
import { HorizontalInfoCard, VerticalInfoCard } from "components/InfoCard";
import { LoadingIndicator } from "components/LoadingIndicator/LoadingIndicator";
import { Header, Subheader } from "components/typography/Typography";
import { useEvent } from "hooks/useEvent";
import { useText } from "hooks/useText";
import { Fragment, useMemo } from "react";
import { FiHeadphones, FiMap } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { getEventTypeName } from "types/Event";
import { Scenary, ScenarySimulators } from "types/Scenary";
import { Translations } from "types/Translations";

type EventScenaries = {
    [simulator in ScenarySimulators]?: {
        [key in "freeware" | "payware"]: Scenary[]
    }
}

export default function EventDetailsPage() {
    const { eventId } = useParams();
    const { data: event, isLoading: isLoadingEvent } = useEvent(Number(eventId));
    const { t } = useText();

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

    const renderScenaryLink = (scenary: Scenary) => (
        <a
            href={scenary.link}
            key={scenary.id}
            rel="noreferrer"
            target="_blank"
            title={scenary.title}
        >
            {scenary.title}
        </a>
    );

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
                <p className="max-w-lg font-action text-justify max-h-80 overflow-y-auto pr-3 pb-1 lg:pb-0 whitespace-pre-line scrollbar-thin scrollbar-thumb-light-gray-5 dark:scrollbar-thumb-dark-gray-5 scrollbar-thumb-rounded">
                    {event.description}
                </p>
                <div className="flex flex-col gap-7">
                    <a href={event.pilotBriefing} target="_blank" rel="noreferrer">
                        <HorizontalInfoCard
                            icon={<FiMap size={25} />}
                            iconBackground="bg-blue"
                            header={t('info.pilotBriefing.title')}
                            content={t('info.pilotBriefing.description')} />
                    </a>

                    <a href={event.atcBriefing} target="_blank" rel="noreferrer">
                        <HorizontalInfoCard
                            icon={<FiHeadphones size={25} />}
                            iconBackground="bg-green"
                            header={t('info.atcBriefing.title')}
                            content={t('info.atcBriefing.description')} />
                    </a>
                </div>
            </div>

            <div className="mt-7">
                <Header textSize="text-lg">{t('info.sceneries.title')}</Header>
                <Subheader>{t('info.sceneries.description')}</Subheader>

                <div className="flex flex-col md:flex-row gap-7 flex-wrap mt-4">
                    {Object.entries(eventScenaries).map(([simulator, scenariesByLicence]) => {
                        const simulatorDescription = `info.sceneries.sims.${simulator.toLowerCase()}.description` as unknown as keyof Translations;
                        return (
                            <Fragment key={simulator}>
                                <VerticalInfoCard
                                    header={simulator.toUpperCase()}
                                    content={t(simulatorDescription)}
                                >
                                    <div className="flex justify-between">
                                        {scenariesByLicence["freeware"].length > 0 && (
                                            <DropdownButton text="Freeware">
                                                {scenariesByLicence["freeware"].map(scenary => renderScenaryLink(scenary))}
                                            </DropdownButton>)}
                                        {scenariesByLicence["payware"].length > 0 &&
                                            <DropdownButton text="Payware">
                                                {scenariesByLicence["payware"].map(scenary => renderScenaryLink(scenary))}
                                            </DropdownButton>}
                                    </div>
                                </VerticalInfoCard>
                            </Fragment>)
                    })}
                </div>
            </div>
        </div >
    );
}
