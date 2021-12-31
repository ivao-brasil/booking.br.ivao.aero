import { useParams } from 'react-router-dom';
import { useSlots } from '../../../hooks/useSlots';
import { Button, Chip, Grid, Tooltip } from '@mui/material';
import { Delete, Edit, FlightLand, FlightTakeoff, People } from '@material-ui/icons';
import { useMutation, useQueryClient } from 'react-query';
import { Slot } from '../../../types/Slot';
import { FunctionComponent, useContext, useState } from 'react';
import { IocContext } from '../../../context/IocContext';
import { AuthContext } from '../../../context/AuthContext';
import { NotificationContext, NotificationType } from '../../../context/NotificationContext';
import { Confirm } from '../../../components/Confirm';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface SlotListProp {
  onEdit: (slot: Slot) => void;
}

export const SlotList: FunctionComponent<SlotListProp> = ({ onEdit }) => {
  const eventId = Number(useParams().eventId);

  const { apiClient } = useContext(IocContext);
  const { token } = useContext(AuthContext);
  const { dispatch } = useContext(NotificationContext);

  const [deletingSlot, setDeletingSlot] = useState<Slot>();
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(25);

  const queryClient = useQueryClient();

  const { slots, count, slotsLoading } = useSlots(eventId, page + 1, perPage);

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

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      filterable: true,
      editable: false,
      width: 70,
    },
    {
      width: 80,
      field: 'flightNumber',
      headerName: 'Callsign',
      editable: false,
      renderCell: data => <b>{data.row.flightNumber}</b>,
      filterable: true,
    },
    {
      field: 'origin',
      headerName: 'Origin',
      editable: false,
      width: 70,
      filterable: true,
    },
    {
      field: 'destination',
      headerName: 'Destination',
      editable: false,
      width: 100,
      filterable: true,
    },
    {
      field: 'type',
      headerName: 'Operation',
      editable: false,
      filterable: false,
      renderCell: data => (
        <Chip
          label={data.row.type.toUpperCase()}
          color={data.row.type === 'takeoff' ? 'info' : 'success'}
          deleteIcon={data.row.type === 'takeoff' ? <FlightTakeoff /> : <FlightLand />}
          onDelete={() => {}}
        />
      ),
      width: 120,
    },
    {
      width: 120,
      field: 'private',
      headerName: 'Type',
      editable: false,
      filterable: false,
      renderCell: data => <Chip label={data.row.private ? 'PRIVATE' : 'REGULAR'} color={data.row.private ? 'error' : 'primary'} />,
    },
    {
      width: 100,
      field: 'slotTime',
      headerName: 'Slot Time',
      filterable: true,
      editable: false,
    },
    {
      field: 'gate',
      headerName: 'Gate',
      filterable: true,
      editable: false,
    },
    {
      field: 'owner',
      headerName: 'Owner',
      filterable: true,
      editable: false,
      width: 120,
      renderCell: data =>
        data.row.owner && (
          <Tooltip title={`${data.row.owner.firstName} ${data.row.owner.lastName} `}>
            <Button
              startIcon={<People />}
              variant="outlined"
              onClick={() => window.open(`https://www.ivao.aero/Member.aspx?id=${data.row.owner?.vid}`, '_blank')}>
              {data.row.owner.vid}
            </Button>
          </Tooltip>
        ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      filterable: false,
      editable: false,
      width: 250,
      renderCell: data => (
        <Grid container spacing={2}>
          <Grid item>
            <Button variant="outlined" color="info" startIcon={<Edit />} onClick={() => onEdit(data.row)}>
              Edit
            </Button>
          </Grid>

          <Grid item>
            <Button variant="outlined" color="error" startIcon={<Delete />} onClick={() => setDeletingSlot(data.row)}>
              Delete
            </Button>
          </Grid>
        </Grid>
      ),
    },
  ];

  return (
    <>
      <DataGrid
        columns={columns}
        rows={slots}
        disableSelectionOnClick
        pageSize={perPage}
        rowCount={count}
        onPageChange={setPage}
        density="comfortable"
        rowsPerPageOptions={[5, 10, 15, 25]}
        loading={slotsLoading}
        disableColumnSelector
        disableDensitySelector
        autoHeight
        onPageSizeChange={setPerPage}
        paginationMode="server"
        filterMode="client"
      />

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
