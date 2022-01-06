import { createContext, FunctionComponent, useContext, useEffect, useState } from 'react';
import { User } from '../types/User';
import { IocContext } from './IocContext';

interface IAuthContext {
  signed: boolean;
  user: User | null;
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
  user: null,
  loading: true,
});

export const AuthProvider: FunctionComponent = ({ children }) => {
  const { apiClient } = useContext(IocContext);
  const [token, setToken] = useState<string>(localStorage.getItem('token') || '');
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      setLoading(true);
      apiClient
        .getAuth(token)
        .then(setUser)
        .catch(() => {
          setToken('');
          localStorage.removeItem('token');
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [apiClient, token]);

  const signIn = async (ivaoToken: string) => {
    const { jwt } = await apiClient.auth(ivaoToken);
    setToken(jwt);
    localStorage.setItem('token', jwt);
  };

  const signOut = () => {
    localStorage.removeItem('token');
    setToken('');
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        signed: user ? user.admin && !user.suspended : false,
        token,
        user,
        loading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
