import { Grid } from '@material-ui/core';
import { FunctionComponent, useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { IocContext } from '../context/IocContext';
import { NotificationContext, NotificationType } from '../context/NotificationContext';
import { Event } from '../types/Event';
import { EventCard } from './EventCard';
import { Confirm } from './Confirm';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { ONE_DAY } from '../constants';

interface EventListProps {
  onEdit: (event: Event) => void;
}

export const EventList: FunctionComponent<EventListProps> = ({ onEdit }) => {
  const { apiClient } = useContext(IocContext);
  const { token } = useContext(AuthContext);
  const { dispatch } = useContext(NotificationContext);
  const [confirm, setConfirm] = useState(false);
  const [event, setEvent] = useState<Event>();

  const queryClient = useQueryClient();

  const { data: events, isLoading: eventLoading } = useQuery('events', () => apiClient.getEvents(token), {
    staleTime: ONE_DAY,
    enabled: Boolean(token),
  });

  const deleteEvent = useMutation((event: Event) => apiClient.deleteEvent(event, token), {
    onSuccess: () => {
      dispatch('Event successfully deleted', 'Success', NotificationType.SUCCESS, 5000);
      queryClient.invalidateQueries('events');
    },
    onError: () => {
      dispatch('Error to delete event', 'Deletion Error', NotificationType.ERROR, 5000);
    },
    onMutate: () => {
      setConfirm(false);
    },
  });

  const onDelete = (event: Event) => {
    setConfirm(true);
    setEvent(event);
  };
  return (
    <div>
      {confirm && (
        <Confirm text={`Please confirm if you want to delete event ${event?.eventName}`} onConfirm={() => event && deleteEvent.mutate(event)} deletion={true} />
      )}
      <Grid container spacing={2}>
        {!eventLoading &&
          events &&
          events.map(event => (
            <Grid item xs={4} key={event.id}>
              <EventCard event={event} onEdit={onEdit} onDelete={onDelete} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};
