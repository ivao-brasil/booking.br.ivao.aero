import { createContext, FunctionComponent, useContext } from 'react';
import { User } from '../types/User';
import { IocContext } from './IocContext';
import { useQuery, useQueryClient } from 'react-query';
import { ONE_DAY } from '../constants';

interface IAuthContext {
  signed: boolean;
  user?: User;
  token: string;
  signIn: (ivaoToken: string) => Promise<void>;
  signOut: () => void;
  loading: Boolean;
}

export const AuthContext = createContext<IAuthContext>({
  signIn: (ivaoToken: string) => Promise.reject(),
  signOut: () => {},
  signed: false,
  token: '',
  loading: true,
});

export const AuthProvider: FunctionComponent = ({ children }) => {
  const { apiClient } = useContext(IocContext);

  const queryClient = useQueryClient();

  const { data: token } = useQuery<string>('token', {
    staleTime: ONE_DAY,
  });

  const { data: user, isLoading: loading } = useQuery('user', () => apiClient.getAuth(token || ''), {
    staleTime: ONE_DAY,
    enabled: Boolean(token),
  });

  const signIn = async (ivaoToken: string) => {
    apiClient.auth(ivaoToken).then(data => {
      queryClient.setQueryData('token', data.jwt);
    });
  };

  const signOut = async () => {
    queryClient.removeQueries();
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        signed: user ? user.admin && !user.suspended : false,
        token: token || '',
        user,
        loading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
