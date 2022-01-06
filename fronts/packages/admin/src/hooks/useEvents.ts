import { useQuery } from 'react-query';
import { ONE_DAY } from '../constants';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { IocContext } from '../context/IocContext';

export const useEvents = (page = 1, perPage = 5) => {
  const { apiClient } = useContext(IocContext);
  const { token } = useContext(AuthContext);

  const { data, isLoading } = useQuery('events', () => apiClient.getEvents(token), {
    staleTime: ONE_DAY,
    enabled: Boolean(token),
  });

  return {
    events: data ? data.data : [],
    count: data ? data.total : 0,
    eventsLoading: isLoading,
  };
};
