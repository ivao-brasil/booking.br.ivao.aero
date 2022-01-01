import { useParams } from "react-router-dom";

export default function EventsPage() {
    const { eventId } = useParams();

    return (
        <p>Event {eventId}</p>
    );
}
