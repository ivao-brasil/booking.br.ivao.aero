import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { PrivateRoutes } from './routes/PrivateRoutes';
import { PublicRoutes } from './routes/PublicRoutes';

export const App = () => {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  return signed ? <PrivateRoutes /> : <PublicRoutes />;
};
