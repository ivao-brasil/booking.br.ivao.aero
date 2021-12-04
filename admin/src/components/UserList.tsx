import { useCallback, useContext, useEffect, useState } from "react";
import { Badge, Button, Table } from "react-bootstrap";
import { ConfirmUserBlock } from "../components/ConfirmUserBlock";
import { AuthContext } from "../context/AuthContext";
import { IocContext } from "../context/IocContext";
import {
  NotificationContext,
  NotificationType,
} from "../context/NotificationContext/NotificationContext";
import { User } from "../types/User";

export const UserList = () => {
  const { apiClient } = useContext(IocContext);
  const { token, user: authUser } = useContext(AuthContext);
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
            `Usuário ${selectedUser.firstName} ${selectedUser.lastName} (${
              selectedUser.vid
            }) ${selectedUser.suspended ? "desbloqueado" : "bloqueado"}`,
            "Bloqueio de Usuário",
            selectedUser.suspended
              ? NotificationType.SUCCESS
              : NotificationType.ALERT,
            5000
          );
          fetchUsers();
        })
        .catch((error) => {
          dispatch(
            `Erro ao bloquear o usuário ${selectedUser.firstName} ${selectedUser.lastName} (${selectedUser.vid})`,
            "Bloqueio de Usuário",
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
      <h2>LISTA DE USUÁRIOS</h2>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>VID</th>
            <th>NAME</th>
            <th>Ratings</th>
            <th>Divisão/País</th>
            <th></th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className={user.suspended ? "table-danger" : ""}>
              <td>
                <b>{user.vid}</b>
              </td>
              <td>
                {user.firstName} {user.lastName}
              </td>
              <td>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <img
                    alt="Pilot Rating"
                    src={`https://www.ivao.aero/data/images/ratings/pilot/${user.pilotRating}.gif`}
                  />
                  <img
                    alt="Atc Rating"
                    src={`https://www.ivao.aero/data/images/ratings/atc/${user.atcRating}.gif`}
                  />
                </div>
              </td>
              <td>
                {user.division} / {user.country}
              </td>
              <td>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  {user.isAdmin ? <Badge bg="success">Admin</Badge> : <></>}
                  {user.suspended ? (
                    <Badge bg="danger">Suspended</Badge>
                  ) : (
                    <></>
                  )}
                </div>
              </td>
              <td>
                {user.vid !== authUser?.vid && (
                  <Button
                    variant={user.suspended ? "success" : "danger"}
                    onClick={() => {
                      setSelectedUser(user);
                      setConfirm(true);
                    }}
                  >
                    {user.suspended ? "Desbloquear" : "Bloquear"}
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
