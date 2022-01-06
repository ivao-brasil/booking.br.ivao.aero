import { Container } from '@material-ui/core';
import { UserList } from './components/UserList';
import { MainLayout } from '../../layouts/MainLayout';

export const UsersPage = () => {
  return (
    <MainLayout>
      <Container>
        <UserList />
      </Container>
    </MainLayout>
  );
};
