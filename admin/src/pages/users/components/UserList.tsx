import { Button, Tooltip } from '@material-ui/core';
import { RemoveCircle, SupervisorAccount } from '@material-ui/icons';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { IocContext } from '../../../context/IocContext';
import { NotificationContext, NotificationType } from '../../../context/NotificationContext';
import { User } from '../../../types/User';
import { useMutation, useQueryClient } from 'react-query';
import { useUsers } from '../../../hooks/useUsers';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { ConfirmUserBlock } from '../../../components/ConfirmUserBlock';

export const UserList = () => {
  const { apiClient } = useContext(IocContext);
  const { token } = useContext(AuthContext);
  const { dispatch } = useContext(NotificationContext);
  const [selectedUser, setSelectedUser] = useState<User>();
  const [confirm, setConfirm] = useState(false);
  const queryClient = useQueryClient();
  const [filterVid, setFilterVid] = useState<string>();

  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(25);

  const { users, count, usersLoading } = useUsers(page + 1, perPage, filterVid);
  const { user: authUser } = useContext(AuthContext);

  const blockUser = useMutation(
    (data: { selectedUser: User; suspended: boolean; token: string }) => apiClient.setUserBlock(data.selectedUser, data.suspended, data.token),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['users', { page: page + 1, perPage }]);
        dispatch(
          `User ${selectedUser?.firstName} ${selectedUser?.lastName} (${selectedUser?.vid}) ${selectedUser?.suspended ? 'unsuspended' : 'suspended'}`,
          'User Suspension',
          selectedUser?.suspended ? NotificationType.SUCCESS : NotificationType.ALERT,
          5000
        );
      },
      onError: () => {
        dispatch(
          `Error to suspend user ${selectedUser?.firstName} ${selectedUser?.lastName} (${selectedUser?.vid})`,
          'User Suspension',
          NotificationType.ERROR,
          5000
        );
      },
      onMutate: () => {
        setConfirm(false);
        setSelectedUser(undefined);
      },
    }
  );

  const columns: GridColDef[] = [
    { field: 'vid', headerName: 'VID', filterable: true, editable: false },
    {
      field: 'name',
      headerName: 'Name',
      filterable: false,
      editable: false,
      renderCell: data => data.row.firstName + ' ' + data.row.lastName,
      width: 200,
    },
    {
      field: 'ratings',
      headerName: 'Ratings',
      editable: false,
      filterable: false,
      renderCell: data => (
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
          <img alt="Pilot Rating" src={`https://www.ivao.aero/data/images/ratings/pilot/${data.row.pilotRating}.gif`} />
          <img alt="Atc Rating" src={`https://www.ivao.aero/data/images/ratings/atc/${data.row.atcRating}.gif`} />
        </div>
      ),
      width: 300,
    },
    {
      field: 'division',
      headerName: 'Division/Country',
      editable: false,
      filterable: false,
      renderCell: data => (
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
          <img alt="Division flag" src={`https://www.ivao.aero/data/images/badge/${data.row.division}.gif`} />
          <img alt="Country Flag" src={`https://www.ivao.aero/data/images/badge/${data.row.country}.gif`} />
        </div>
      ),
      width: 150,
    },
    {
      field: 'status',
      headerName: 'Status',
      editable: false,
      filterable: false,
      renderCell: data => (
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
          {data.row.admin ? (
            <Tooltip title={`${data.row.firstName} is admin`}>
              <SupervisorAccount />
            </Tooltip>
          ) : (
            <></>
          )}
          {data.row.suspended ? (
            <Tooltip title={`${data.row.firstName} is suspended`}>
              <RemoveCircle color="error" />
            </Tooltip>
          ) : (
            <></>
          )}
        </div>
      ),
      width: 150,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      editable: false,
      filterable: false,
      renderCell: data =>
        data.row.vid !== authUser?.vid &&
        !data.row.admin && (
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Button
              onClick={() => {
                setSelectedUser(data.row);
                setConfirm(true);
              }}
              variant="contained"
              color={data.row.suspended ? 'success' : 'error'}>
              {data.row.suspended ? 'Unsuspend' : 'Suspend'}
            </Button>
          </div>
        ),
    },
  ];

  return (
    <div style={{ marginTop: '100px' }}>
      {confirm && selectedUser && (
        <ConfirmUserBlock
          user={selectedUser}
          onConfirm={() =>
            blockUser.mutate({
              selectedUser,
              suspended: !selectedUser?.suspended,
              token,
            })
          }
        />
      )}
      <DataGrid
        columns={columns}
        rows={users.filter(d => d.firstName)}
        disableSelectionOnClick
        pageSize={perPage}
        rowCount={count}
        onPageChange={setPage}
        density="comfortable"
        rowsPerPageOptions={[5, 10, 15, 25]}
        loading={usersLoading}
        disableColumnSelector
        disableDensitySelector
        autoPageSize
        autoHeight
        onPageSizeChange={setPerPage}
        paginationMode="server"
        onFilterModelChange={(model, details) => {
          const vid = model.items[0].value;
          const operation = model.items[0].operatorValue;

          if (operation !== 'contains') {
            dispatch('This operation is not available', 'Operation Invalid', NotificationType.ERROR, 5000);
          } else {
            setFilterVid(vid);
            if (!vid) {
              setPerPage(5);
            }
          }
        }}
        filterMode="server"
      />
    </div>
  );
};
