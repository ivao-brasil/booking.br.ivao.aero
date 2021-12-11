import { Grid } from '@material-ui/core';
import { FunctionComponent, useCallback, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { IocContext } from '../context/IocContext';
import { NotificationContext, NotificationType } from '../context/NotificationContext';
import { Event } from '../types/Event';
import { EventCard } from './EventCard';
import { Confirm } from './Confirm';

interface EventListProps {
  onEdit: (event: Event) => void;
}

export const EventList: FunctionComponent<EventListProps> = ({ onEdit }) => {
  const { apiClient } = useContext(IocContext);
  const { token } = useContext(AuthContext);
  const { dispatch } = useContext(NotificationContext);
  const [events, setEvents] = useState<Array<Event>>([]);
  const [confirm, setConfirm] = useState(false);
  const [event, setEvent] = useState<Event>();

  const fetchEvent = useCallback(() => {
    apiClient
      .getEvents(token)
      .then(setEvents)
      .catch(() => {
        dispatch('Error to load events', 'Loading error', NotificationType.ERROR, 5000);
      });
  }, [apiClient, token, dispatch]);

  useEffect(() => {
    fetchEvent();
  }, []);

  const onDelete = (event: Event) => {
    setConfirm(true);
    setEvent(event);
  };

  const deleteEvent = (result: Boolean) => {
    if (event && result) {
      apiClient
        .deleteEvent(event, token)
        .then(() => {
          dispatch('Event successfully deleted', 'Success', NotificationType.SUCCESS, 5000);
          fetchEvent();
        })
        .catch(() => {
          dispatch('Error to delete event', 'Deletion Error', NotificationType.ERROR, 5000);
        });
    }

    setConfirm(false);
  };

  return (
    <div>
      {confirm && <Confirm text={`Please confirm if you want to delete event ${event?.eventName}`} onConfirm={deleteEvent} deletion={true} />}
      <Grid container spacing={2}>
        {events.map(event => (
          <Grid item xs={4} key={event.id}>
            <EventCard event={event} onEdit={onEdit} onDelete={onDelete} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
