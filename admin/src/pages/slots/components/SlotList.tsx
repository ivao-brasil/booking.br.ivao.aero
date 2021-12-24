import { useParams } from 'react-router-dom';
import { useSlots } from '../../../hooks/useSlots';
import { Button, Chip, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import { Delete, Edit, FlightLand, FlightTakeoff, People } from '@material-ui/icons';
import { useMutation, useQueryClient } from 'react-query';
import { Slot } from '../../../types/Slot';
import { FunctionComponent, useContext, useState } from 'react';
import { IocContext } from '../../../context/IocContext';
import { AuthContext } from '../../../context/AuthContext';
import { NotificationContext, NotificationType } from '../../../context/NotificationContext';
import { Confirm } from '../../../components/Confirm';

interface SlotListProp {
  onEdit: (slot: Slot) => void;
}

export const SlotList: FunctionComponent<SlotListProp> = ({ onEdit }) => {
  const eventId = Number(useParams().eventId);
  const { slots } = useSlots(eventId);
  const { apiClient } = useContext(IocContext);
  const { token } = useContext(AuthContext);
  const { dispatch } = useContext(NotificationContext);
  const queryClient = useQueryClient();
  const [deletingSlot, setDeletingSlot] = useState<Slot>();

  const deleteSlot = useMutation((slot: Slot) => apiClient.deleteSlot(slot.id, token), {
    onSuccess: () => {
      setDeletingSlot(undefined);
      queryClient.invalidateQueries(['slots', eventId]);
      dispatch('Slot successfully deleted', 'Slot exclusion', NotificationType.SUCCESS, 5000);
    },
    onError: () => {
      dispatch('Error to exclude slot', 'Slot exclusion', NotificationType.ERROR, 5000);
    },
  });

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Callsign</TableCell>
              <TableCell>Origin</TableCell>
              <TableCell>Destination</TableCell>
              <TableCell>Operation</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Slot Time</TableCell>
              <TableCell>Gate</TableCell>
              <TableCell>Owner</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slots.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>
                  <b>{row.flightNumber}</b>
                </TableCell>
                <TableCell>{row.origin}</TableCell>
                <TableCell>{row.destination}</TableCell>
                <TableCell>
                  <Chip
                    label={row.type.toUpperCase()}
                    color={row.type === 'takeoff' ? 'info' : 'success'}
                    deleteIcon={row.type === 'takeoff' ? <FlightTakeoff /> : <FlightLand />}
                    onDelete={() => {}}
                  />
                </TableCell>
                <TableCell>
                  <Chip label={row.private ? 'PRIVATE' : 'NO PRIVATE'} color={row.private ? 'error' : 'primary'} />
                </TableCell>
                <TableCell>{row.slotTime}</TableCell>
                <TableCell>{row.gate}</TableCell>
                <TableCell>
                  {row.owner ? (
                    <Tooltip title={`${row.owner.firstName} ${row.owner.lastName} `}>
                      <Button
                        startIcon={<People />}
                        variant="outlined"
                        onClick={() => window.open(`https://www.ivao.aero/Member.aspx?id=${row.owner?.vid}`, '_blank')}>
                        {row.owner.vid}
                      </Button>
                    </Tooltip>
                  ) : (
                    ''
                  )}
                </TableCell>
                <TableCell>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Button variant="outlined" color="info" startIcon={<Edit />} onClick={() => onEdit(row)}>
                        Edit
                      </Button>
                    </Grid>

                    <Grid item>
                      <Button variant="outlined" color="error" startIcon={<Delete />} onClick={() => setDeletingSlot(row)}>
                        Delete
                      </Button>
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {deletingSlot && (
        <Confirm
          text={`Please confirm if you want do delete slot ${deletingSlot.origin} - ${deletingSlot.destination}?`}
          onConfirm={result => {
            setDeletingSlot(undefined);

            if (result) {
              deleteSlot.mutate(deletingSlot);
            }
          }}
        />
      )}
    </>
  );
};
