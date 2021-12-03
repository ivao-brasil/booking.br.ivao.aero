import { FunctionComponent, useContext, useEffect, useState } from "react";
import { Badge, Button, Container, Table } from "react-bootstrap";
import { Confirm } from "../components/Confirm";
import { AuthContext } from "../context/AuthContext";
import { IocContext } from "../context/IocContext";
import { MainLayout } from "../layouts/MainLayout";
import { User } from "../types/User";

const confirmationText = {
  block: "Por favor confirme se gostaria de bloquear {1} do sistema?",
  unblock: "Por favor confirme se gostaria de desbloquear {1} do sistema?",
};

export const ConfirmUserBlock: FunctionComponent<{
  user: User;
  onConfirm: (value: boolean) => void;
}> = ({ user, onConfirm }) => {
  return (
    <Confirm
      text={
        user?.suspended
          ? confirmationText.unblock.replace(
              "{1}",
              `${user.firstName} ${user.lastName} (${user.vid})`
            )
          : confirmationText.block.replace(
              "{1}",
              `${user.firstName} ${user.lastName} (${user.vid})`
            )
      }
      onConfirm={onConfirm}
    />
  );
};

export const UserList = () => {
  const { apiClient } = useContext(IocContext);
  const { token } = useContext(AuthContext);
  const [users, setUsers] = useState<Array<User>>([]);

  const [selectedUser, setSelectedUser] = useState<User>();
  const [confirm, setConfirm] = useState(false);

  const fetchUsers = () => apiClient.getUsers({}, token).then(setUsers);

  useEffect(() => {
    fetchUsers();
  }, []);

  const confirmUserBlock = (value: boolean) => {
    setConfirm(false);

    if (value && selectedUser) {
      apiClient
        .setUserBlock(selectedUser, !selectedUser.suspended, token)
        .then(() => {
          fetchUsers();
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
      <h1>Lista de usuários</h1>
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
                    src={`https://www.ivao.aero/data/images/ratings/pilot/${user.pilotRating}.gif`}
                  />
                  <img
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
                <Button
                  variant={user.suspended ? "success" : "danger"}
                  onClick={() => {
                    setSelectedUser(user);
                    setConfirm(true);
                  }}
                >
                  {user.suspended ? "Desbloquear" : "Bloquear"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export const EventPage = () => {
  return (
    <MainLayout>
      <Container>
        <UserList />
      </Container>
    </MainLayout>
  );
};
