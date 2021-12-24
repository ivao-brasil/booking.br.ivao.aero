import { useContext } from 'react';
import { IocContext } from '../context/IocContext';
import { AuthContext } from '../context/AuthContext';
import { useQuery } from 'react-query';

export const useSlots = (eventId: number) => {
  const { apiClient } = useContext(IocContext);
  const { token } = useContext(AuthContext);

  const { data } = useQuery(['slots', eventId], () => apiClient.getSlotsByEvent(eventId, token));

  return {
    slots: data || [],
  };
};
