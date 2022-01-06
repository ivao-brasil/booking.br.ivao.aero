import { useQueryClient } from 'react-query';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';

export const Logout = () => {
  const { signOut } = useContext(AuthContext);
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.removeQueries();
    signOut();
    window.location.href = 'https://br.ivao.aero';
  });

  return <></>;
};
