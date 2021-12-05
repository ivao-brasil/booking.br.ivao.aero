import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { IocContext } from "../context/IocContext";
import {
  NotificationContext,
  NotificationType,
} from "../context/NotificationContext";
import { Event } from "../types/Event";
import { EventCard } from "./EventCard";

export const EventList = () => {
  const { apiClient } = useContext(IocContext);
  const { token } = useContext(AuthContext);
  const { dispatch } = useContext(NotificationContext);

  const [events, setEvents] = useState<Array<Event>>([]);

  useEffect(() => {
    apiClient
      .getEvents(token)
      .then(setEvents)
      .catch(() => {
        dispatch(
          "Error to load events",
          "Loading error",
          NotificationType.ERROR,
          5000
        );
      });
  }, []);

  return <div>{events.length > 0 && <EventCard event={events[0]} />}</div>;
};
