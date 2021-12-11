import { Button, Checkbox, FormControlLabel, FormGroup, TextField, Tooltip } from '@material-ui/core';
import { FunctionComponent, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthContext';
import { IocContext } from '../context/IocContext';
import { NotificationContext, NotificationType } from '../context/NotificationContext';
import { Event } from '../types/Event';

interface INewEventForm {
  dateStart: Date;
  dateEnd: Date;
  eventName: string;
  privateSlots: boolean;
  pilotBriefing: string;
  atcBriefing: string;
  description: string;
  banner: string;
  atcBooking: string;
}

interface IEventFormProps {
  defaultState?: Event;
}

export const EventForm: FunctionComponent<IEventFormProps> = ({ defaultState }) => {
  const { register, handleSubmit, watch, reset } = useForm<INewEventForm>({
    defaultValues: defaultState
      ? {
          ...defaultState,
          dateStart: new Date(defaultState.dateStart),
          dateEnd: new Date(defaultState.dateEnd),
          privateSlots: Boolean(defaultState.privateSlots),
        }
      : {},
  });

  const { banner, privateSlots, dateEnd, dateStart } = watch();
  const { apiClient } = useContext(IocContext);
  const { token } = useContext(AuthContext);
  const { dispatch } = useContext(NotificationContext);

  const createEvent = (data: INewEventForm) =>
    apiClient
      .createEvent(
        {
          ...data,
          dateEnd: data.dateEnd.getTime() / 1000,
          dateStart: data.dateStart.getTime() / 1000,
          privateSlots: data.privateSlots ? 1 : 0,
        },
        token
      )
      .then(() => {
        reset();
        dispatch('Event successfully created', 'Event created', NotificationType.SUCCESS, 5000);
      })
      .catch(() => {
        dispatch('Error to create event', 'Event creation error', NotificationType.ERROR, 5000);
      });

  const updateEvent = (data: INewEventForm) => {
    if (defaultState) {
      return apiClient
        .updateEvent(
          defaultState.id,
          {
            ...data,
            dateEnd: data.dateEnd.getTime() / 1000,
            dateStart: data.dateStart.getTime() / 1000,
            privateSlots: data.privateSlots ? 1 : 0,
          },
          token
        )
        .then(() => {
          reset();
          dispatch('Event successfully updated', 'Event update', NotificationType.SUCCESS, 5000);
        })
        .catch(() => {
          dispatch('Error to update event', 'Event updating error', NotificationType.ERROR, 5000);
        });
    }
  };

  const onSubmit = (data: INewEventForm) => {
    if (!defaultState) {
      return createEvent(data);
    }

    return updateEvent(data);
  };

  const formatDateToDateTime = (date?: Date) => {
    if (!date) {
      return '';
    }
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${year}-${month}-${day}T${hour}:${minutes}`;
  };

  return (
    <section style={{ display: 'flex', gap: '24px' }}>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          width: '100%',
        }}
        onSubmit={handleSubmit(onSubmit)}>
        <TextField label="Event Name" {...register('eventName', { required: true })} />
        <Tooltip title="Your local time" placement="left-start">
          <TextField
            InputLabelProps={{ shrink: true }}
            label="Start Date (localtime)"
            type="datetime-local"
            value={formatDateToDateTime(dateStart)}
            {...register('dateStart', { required: true, valueAsDate: true })}
          />
        </Tooltip>
        <Tooltip title="Your local time" placement="left-start">
          <TextField
            InputLabelProps={{ shrink: true }}
            label="End Date (localtime)"
            type="datetime-local"
            value={formatDateToDateTime(dateEnd)}
            {...register('dateEnd', { required: true, valueAsDate: true })}
          />
        </Tooltip>
        <TextField label="Pilot Briefing" {...register('pilotBriefing', { required: true })} />
        <TextField label="ATC Briefing" {...register('atcBriefing', { required: true })} />
        <TextField label="Event Description" rows={4} multiline {...register('description', { required: true })} />
        <TextField label="Banner Link" {...register('banner', { required: true })} />
        <TextField label="ATC Booking Link" {...register('atcBooking', { required: true })} />
        <FormGroup>
          <FormControlLabel control={<Checkbox {...register('privateSlots')} checked={privateSlots} />} label="Private slots available" />
        </FormGroup>
        <Button variant="contained" type="submit">
          Save
        </Button>
      </form>
      <section style={{ width: '100%' }}>{banner && <img src={banner} width="600px" alt="Banner" />}</section>
    </section>
  );
};
