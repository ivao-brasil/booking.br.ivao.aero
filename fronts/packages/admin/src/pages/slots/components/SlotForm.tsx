import { Button, Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { FunctionComponent, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { AuthContext } from '../../../context/AuthContext';
import { IocContext } from '../../../context/IocContext';
import { NotificationContext, NotificationType } from '../../../context/NotificationContext';
import { Slot, SlotType } from '../../../types/Slot';

interface ISlotForm {
  type: SlotType;
  flightNumber: string;
  origin: string;
  destination: string;
  slotTime: string;
  gate: string;
  aircraft: string;
  private: boolean;
}

interface ISlotFormProps {
  defaultState?: Slot;
  onPersist: () => void;
  eventId: number;
}

export const SlotForm: FunctionComponent<ISlotFormProps> = ({ defaultState, eventId, onPersist }) => {
  const { register, handleSubmit, watch, reset } = useForm<ISlotForm>({
    defaultValues: defaultState,
  });

  const { type, private: slotPrivate } = watch();

  const { apiClient } = useContext(IocContext);
  const { token } = useContext(AuthContext);
  const { dispatch } = useContext(NotificationContext);

  const queryClient = useQueryClient();

  const createSlot = useMutation((data: ISlotForm) => apiClient.createSlot(eventId, data, token), {
    onSuccess: () => {
      queryClient.invalidateQueries(['slots', eventId]);
      onPersist();
      reset();
      dispatch('Slot successfully created', 'Slot created', NotificationType.SUCCESS, 5000);
    },
    onError: () => {
      dispatch('Error to create slot', 'Slot creation error', NotificationType.ERROR, 5000);
    },
  });

  const updateSlot = useMutation((data: ISlotForm) => apiClient.updateSlot(Number(defaultState?.id), data, token), {
    onSuccess: () => {
      queryClient.invalidateQueries(['slots', eventId]);
      onPersist();
      reset();
      dispatch('Slot successfully updated', 'Slot update', NotificationType.SUCCESS, 5000);
    },
    onError: () => {
      dispatch('Error to update slot', 'Slot creation error', NotificationType.ERROR, 5000);
    },
  });

  const onSubmit = (data: ISlotForm) => {
    if (!defaultState) {
      return createSlot.mutate(data);
    }

    return updateSlot.mutate(data);
  };

  return (
    <section>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          width: '100%',
        }}
        onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <InputLabel>Slot Type</InputLabel>
          <Select value={type} label="Slot Type" variant="outlined" {...register('type', { required: true })}>
            <MenuItem value={SlotType.TAKEOFF}>Departure</MenuItem>
            <MenuItem value={SlotType.LANDING}>Arrival</MenuItem>
          </Select>
        </FormControl>
        <TextField label="Callsign" {...register('flightNumber', { maxLength: 7 })} />
        <TextField label="Origin" {...register('origin', { maxLength: 4 })} />
        <TextField label="Destination" {...register('destination', { maxLength: 4 })} />
        <TextField label="Slot Time" {...register('slotTime', { required: true, maxLength: 4 })} />
        <TextField label="Gate" {...register('gate', { required: true, maxLength: 10 })} />
        <TextField label="Aircraft" {...register('aircraft', { maxLength: 4 })} />
        <FormGroup>
          <FormControlLabel control={<Checkbox {...register('private')} checked={slotPrivate} />} label="Private" />
        </FormGroup>
        <Button variant="contained" type="submit">
          Save
        </Button>
      </form>
    </section>
  );
};
