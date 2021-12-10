import { Grid } from '@material-ui/core';
import { FunctionComponent, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { IocContext } from '../context/IocContext';
import { NotificationContext, NotificationType } from '../context/NotificationContext';
import { Event } from '../types/Event';
import { EventCard } from './EventCard';

interface EventListProps {
  onEdit: (event: Event) => void;
}

export const EventList: FunctionComponent<EventListProps> = ({ onEdit }) => {
  const { apiClient } = useContext(IocContext);
  const { token } = useContext(AuthContext);
  const { dispatch } = useContext(NotificationContext);
  const [events, setEvents] = useState<Array<Event>>([]);

  useEffect(() => {
    apiClient
      .getEvents(token)
      .then(setEvents)
      .catch(() => {
        dispatch('Error to load events', 'Loading error', NotificationType.ERROR, 5000);
      });
  }, [apiClient, token, dispatch]);

  return (
    <div>
      <Grid container spacing={2}>
        {events.map((event) => (
          <Grid item xs={4} key={event.id}>
            <EventCard event={event} onEdit={onEdit} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
