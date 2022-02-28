import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Subheader } from "./typography/Typography";

interface EventCardProps {
    eventId: number;
    imageSrc: string;
    eventName: string;
    eventType: string;
    description: string;
    tbd?: boolean;
}

export const EventCard: FunctionComponent<EventCardProps> = ({ eventId, imageSrc, eventName, eventType, description, tbd = false }) => {
    const MAX_DESC_LENGTH = 160;

    return (
        <div className="flex flex-col w-72 font-header">
            <div className="relative">
                <img src={imageSrc}
                    alt={`${eventName} logo`}
                    width="288px"
                    height="192px"
                    className={`rounded-md w-full h-48 aspect-auto ${tbd ? "blur-sm" : ""}`} />

                {tbd && (
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg text-white">
                        Em breve...
                    </span>
                )}

            </div>

            <h2 className="mt-3 text-blue dark:text-white text-[2rem] font-bold">
                <Link to={`/event/${eventId}`}>{eventName}</Link>
            </h2>
            <Subheader>{eventType}</Subheader>
            <p className="mt-3 text-light-gray-2 dark:text-light-gray-3 max-h-32">{description.substring(0, MAX_DESC_LENGTH) + "..."}</p>
        </div>
    );
}