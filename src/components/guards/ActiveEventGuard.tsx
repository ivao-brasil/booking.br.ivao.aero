import { FunctionComponent, useContext, useEffect } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEvent } from "hooks/useEvent";

export const ActiveEventGuard: FunctionComponent = () => {
    const navigate = useNavigate();

    const { eventId: eventIdUrl } = useParams();
    let { state: locationState } = useLocation();
    const locationData = locationState as { eventId: number } | undefined;

    const eventId = eventIdUrl || locationData?.eventId;
    const { data: event } = useEvent(Number(eventId));

    useEffect(() => {
        if (!event) {
            return;
        }

        // Status o qual é permitido ver o evento
        if (event.status === 'scheduled') {
            return;
        }

        navigate("/404");
    }, [navigate, event]);

    return <Outlet />;
}