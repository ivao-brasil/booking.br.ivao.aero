import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@material-ui/core";
import { RemoveCircle, SupervisorAccount } from "@material-ui/icons";
import { useCallback, useContext, useEffect, useState } from "react";
import { ConfirmUserBlock } from "../components/ConfirmUserBlock";
import { AuthContext } from "../context/AuthContext";
import { IocContext } from "../context/IocContext";
import {
  NotificationContext,
  NotificationType,
} from "../context/NotificationContext/NotificationContext";
import { User } from "../types/User";

const UserRow = (user: User, onUserChange: (user: User) => void) => {
  const { user: authUser } = useContext(AuthContext);

  return (
    <TableRow key={user.id}>
      <TableCell>{user.vid}</TableCell>
      <TableCell>
        {user.firstName} {user.lastName}
      </TableCell>
      <TableCell>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <img
            alt="Pilot Rating"
            src={`https://www.ivao.aero/data/images/ratings/pilot/${user.pilotRating}.gif`}
          />
          <img
            alt="Atc Rating"
            src={`https://www.ivao.aero/data/images/ratings/atc/${user.atcRating}.gif`}
          />
        </div>
      </TableCell>
      <TableCell>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <img
            alt="Division flag"
            src={`https://www.ivao.aero/data/images/badge/${user.division}.gif`}
          />
          <img
            alt="Country Flag"
            src={`https://www.ivao.aero/data/images/badge/${user.country}.gif`}
          />
        </div>
      </TableCell>
      <TableCell>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {user.isAdmin ? (
            <Tooltip title={`${user.firstName} is admin`}>
              <SupervisorAccount />
            </Tooltip>
          ) : (
            <></>
          )}
          {user.suspended ? (
            <Tooltip title={`${user.firstName} is suspended`}>
              <RemoveCircle color="error" />
            </Tooltip>
          ) : (
            <></>
          )}
        </div>
      </TableCell>
      <TableCell>
        {user.vid !== authUser?.vid && (
          <Button
            onClick={() => {
              onUserChange(user);
            }}
            variant="contained"
            color={user.suspended ? "success" : "error"}
          >
            {user.suspended ? "Unsuspend" : "Suspend"}
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
};

export const UserList = () => {
  const { apiClient } = useContext(IocContext);
  const { token } = useContext(AuthContext);
  const { dispatch } = useContext(NotificationContext);
  const [users, setUsers] = useState<Array<User>>([]);
  const [selectedUser, setSelectedUser] = useState<User>();
  const [confirm, setConfirm] = useState(false);

  const fetchUsers = useCallback(
    () => apiClient.getUsers({}, token).then(setUsers),
    [apiClient, token]
  );

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const confirmUserBlock = (value: boolean) => {
    setConfirm(false);

    if (value && selectedUser) {
      apiClient
        .setUserBlock(selectedUser, !selectedUser.suspended, token)
        .then(() => {
          dispatch(
            `User ${selectedUser.firstName} ${selectedUser.lastName} (${
              selectedUser.vid
            }) ${selectedUser.suspended ? "unsuspended" : "suspended"}`,
            "User Suspension",
            selectedUser.suspended
              ? NotificationType.SUCCESS
              : NotificationType.ALERT,
            5000
          );
          fetchUsers();
        })
        .catch((error) => {
          dispatch(
            `Error to suspend user ${selectedUser.firstName} ${selectedUser.lastName} (${selectedUser.vid})`,
            "User Suspension",
            NotificationType.ERROR,
            5000
          );
        })
        .finally(() => {
          setSelectedUser(undefined);
        });
    }
  };

  return (
    <>
      {confirm && selectedUser && (
        <ConfirmUserBlock user={selectedUser} onConfirm={confirmUserBlock} />
      )}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>VID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Ratings</TableCell>
              <TableCell>Division/Country</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) =>
              UserRow(user, (user: User) => {
                setSelectedUser(user);
                setConfirm(true);
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
