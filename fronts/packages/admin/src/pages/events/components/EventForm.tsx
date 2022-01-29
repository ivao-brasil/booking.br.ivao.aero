import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, TextField, Tooltip } from '@material-ui/core';
import { FunctionComponent, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { AuthContext } from '../../../context/AuthContext';
import { IocContext } from '../../../context/IocContext';
import { NotificationContext, NotificationType } from '../../../context/NotificationContext';
import { Event, EventType } from '../../../types/Event';
import { DatePicker, DateTimePicker } from '@mui/lab';

interface IEventFormProps {
  defaultState?: Event;
  onPersist: () => void;
}

export interface EventForm {
  dateStart: Date;
  dateEnd: Date;
  eventName: string;
  privateSlots: boolean;
  pilotBriefing: string;
  atcBriefing: string;
  description: string;
  banner: string;
  atcBooking: string;
  type: EventType;
  airports: string;
}

export const EventForm: FunctionComponent<IEventFormProps> = ({ defaultState, onPersist }) => {
  const { register, handleSubmit, watch, reset, setValue } = useForm<EventForm>({
    defaultValues: defaultState
      ? {
          ...defaultState,
          dateStart: new Date(defaultState.dateStart),
          dateEnd: new Date(defaultState.dateEnd),
          privateSlots: Boolean(defaultState.privateSlots),
          airports: defaultState.airports.map(airport => airport.icao).join(','),
        }
      : {},
  });

  const { banner, privateSlots, dateEnd, dateStart, type } = watch();
  const { apiClient } = useContext(IocContext);
  const { token } = useContext(AuthContext);
  const { dispatch } = useContext(NotificationContext);

  const queryClient = useQueryClient();

  const createEvent = useMutation(
    (data: EventForm) =>
      apiClient.createEvent(
        {
          ...data,
          dateEnd: data.dateEnd.getTime() / 1000,
          dateStart: data.dateStart.getTime() / 1000,
          privateSlots: data.privateSlots ? 1 : 0,
        },
        token
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('events');
        onPersist();
        reset();
        dispatch('Event successfully created', 'Event created', NotificationType.SUCCESS, 5000);
      },
      onError: () => {
        dispatch('Error to create event', 'Event creation error', NotificationType.ERROR, 5000);
      },
    }
  );

  const updateEvent = useMutation(
    (data: EventForm) =>
      apiClient.updateEvent(
        defaultState?.id || 0,
        {
          ...data,
          dateEnd: data.dateEnd.getTime() / 1000,
          dateStart: data.dateStart.getTime() / 1000,
          privateSlots: data.privateSlots ? 1 : 0,
        },
        token
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('events');
        onPersist();
        reset();
        dispatch('Event successfully updated', 'Event update', NotificationType.SUCCESS, 5000);
      },
      onError: () => {
        dispatch('Error to update event', 'Event updating error', NotificationType.ERROR, 5000);
      },
    }
  );

  const onSubmit = (data: EventForm) => {
    if (!defaultState) {
      return createEvent.mutate(data);
    }

    return updateEvent.mutate(data);
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
        <DateTimePicker
          renderInput={(params: any) => <TextField {...params} />}
          label="Start date (your local time)"
          value={dateStart}
          onChange={newValue => {
            if (newValue) {
              setValue('dateStart', newValue);
            }
          }}
          minDateTime={new Date()}
          ampm={false}
        />
        <DateTimePicker
          renderInput={(params: any) => <TextField {...params} />}
          label="End date (your local time)"
          value={dateEnd}
          onChange={newValue => {
            if (newValue) {
              setValue('dateEnd', newValue);
            }
          }}
          minDateTime={new Date()}
          ampm={false}
        />
        <TextField label="Pilot Briefing" {...register('pilotBriefing', { required: true })} />
        <TextField label="ATC Briefing" {...register('atcBriefing', { required: true })} />
        <TextField label="Event Description" rows={4} multiline {...register('description', { required: true })} />
        <TextField label="Banner Link" {...register('banner', { required: true })} />
        <TextField label="ATC Booking Link" {...register('atcBooking', { required: true })} />
        <TextField label="Airports" {...register('airports', { required: true })} />
        <FormGroup>
          <FormControlLabel control={<Checkbox {...register('privateSlots')} checked={privateSlots} />} label="Private slots available" />
        </FormGroup>
        <FormControl fullWidth>
          <InputLabel id="eventType">Event Type</InputLabel>
          <Select labelId="eventType" id="demo-simple-select" label="Event Type" {...register('type', { required: true })} value={type}>
            <MenuItem value={EventType.RFE}>RFE</MenuItem>
            <MenuItem value={EventType.RFO}>RFO</MenuItem>
            <MenuItem value={EventType.MSA}>MSA</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" type="submit">
          Save
        </Button>
      </form>
      <section style={{ width: '100%' }}>{banner && <img src={banner} width="600px" alt="Banner" />}</section>
    </section>
  );
};
