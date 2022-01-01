import { useParams } from "react-router-dom";

export default function EventsPage() {
    const { id } = useParams();

    return (<p>Event {id}</p>);
}
