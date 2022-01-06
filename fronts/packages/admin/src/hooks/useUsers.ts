import { useContext } from 'react';
import { IocContext } from '../context/IocContext';
import { AuthContext } from '../context/AuthContext';
import { useQuery } from 'react-query';
import { ONE_MINUTE } from '../constants';

export const useUsers = (page: number, perPage: number, vid?: string) => {
  const { apiClient } = useContext(IocContext);
  const { token } = useContext(AuthContext);

  const { data: paginationUser, isLoading } = useQuery(
    ['users', { page, perPage, ...(vid && { vid }) }],
    () =>
      apiClient.getUsers(
        {
          perPage,
          page,
          ...(vid && { vid }),
        },
        token
      ),
    {
      staleTime: ONE_MINUTE,
      keepPreviousData: true,
    }
  );

  return {
    users: paginationUser ? paginationUser.data : [],
    count: paginationUser ? paginationUser.total : 0,
    usersLoading: isLoading,
  };
};
