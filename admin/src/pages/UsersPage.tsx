import { Container } from "react-bootstrap";
import { UserList } from "../components/UserList";
import { MainLayout } from "../layouts/MainLayout";

export const UsersPage = () => {
  return (
    <MainLayout>
      <Container>
        <UserList />
      </Container>
    </MainLayout>
  );
};
