import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Tooltip
} from '@material-ui/core';
import {FunctionComponent, useContext} from 'react';
import {useForm} from 'react-hook-form';
import {useMutation, useQueryClient} from 'react-query';
import {AuthContext} from '../../../context/AuthContext';
import {IocContext} from '../../../context/IocContext';
import {NotificationContext, NotificationType} from '../../../context/NotificationContext';
import {Event, EventType} from '../../../types/Event';

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
    type: EventType;
}

interface IEventFormProps {
    defaultState?: Event;
    onPersist: () => void;
}

export const EventForm: FunctionComponent<IEventFormProps> = ({defaultState, onPersist}) => {
    console.log(defaultState);
    const {register, handleSubmit, watch, reset} = useForm<INewEventForm>({
        defaultValues: defaultState
            ? {
                ...defaultState,
                dateStart: new Date(defaultState.dateStart),
                dateEnd: new Date(defaultState.dateEnd),
                privateSlots: Boolean(defaultState.privateSlots),
            }
            : {},
    });

    const {banner, privateSlots, dateEnd, dateStart, type} = watch();
    const {apiClient} = useContext(IocContext);
    const {token} = useContext(AuthContext);
    const {dispatch} = useContext(NotificationContext);

    const queryClient = useQueryClient();

    const createEvent = useMutation(
        (data: INewEventForm) =>
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
        (data: INewEventForm) =>
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

    const onSubmit = (data: INewEventForm) => {
        if (!defaultState) {
            return createEvent.mutate(data);
        }

        return updateEvent.mutate(data);
    };

    const formatDateToDateTime = (date?: Date) => {
        if (!date) {
            return '';
        }
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hour = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${year}-${month}-${day}T${hour}:${minutes}`;
    };

    return (
        <section style={{display: 'flex', gap: '24px'}}>
            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px',
                    width: '100%',
                }}
                onSubmit={handleSubmit(onSubmit)}>
                <TextField label="Event Name" {...register('eventName', {required: true})} />
                <Tooltip title="Your local time" placement="left-start">
                    <TextField
                        InputLabelProps={{shrink: true}}
                        label="Start Date (localtime)"
                        type="datetime-local"
                        value={formatDateToDateTime(dateStart)}
                        {...register('dateStart', {required: true, valueAsDate: true})}
                    />
                </Tooltip>
                <Tooltip title="Your local time" placement="left-start">
                    <TextField
                        InputLabelProps={{shrink: true}}
                        label="End Date (localtime)"
                        type="datetime-local"
                        value={formatDateToDateTime(dateEnd)}
                        {...register('dateEnd', {required: true, valueAsDate: true})}
                    />
                </Tooltip>
                <TextField label="Pilot Briefing" {...register('pilotBriefing', {required: true})} />
                <TextField label="ATC Briefing" {...register('atcBriefing', {required: true})} />
                <TextField label="Event Description" rows={4}
                           multiline {...register('description', {required: true})} />
                <TextField label="Banner Link" {...register('banner', {required: true})} />
                <TextField label="ATC Booking Link" {...register('atcBooking', {required: true})} />
                <FormGroup>
                    <FormControlLabel control={<Checkbox {...register('privateSlots')} checked={privateSlots}/>}
                                      label="Private slots available"/>
                </FormGroup>
                <FormControl fullWidth>
                    <InputLabel id="eventType">Event Type</InputLabel>
                    <Select labelId="eventType" id="demo-simple-select"
                            label="Event Type" {...register('type', {required: true})} value={type}>
                        <MenuItem value={EventType.RFE}>RFE</MenuItem>
                        <MenuItem value={EventType.RFO}>RFO</MenuItem>
                        <MenuItem value={EventType.MSA}>MSA</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" type="submit">
                    Save
                </Button>
            </form>
            <section style={{width: '100%'}}>{banner && <img src={banner} width="600px" alt="Banner"/>}</section>
        </section>
    );
};
