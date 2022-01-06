import { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const RedirectToLogin = () => {
  const IVAOTOKEN = new URLSearchParams(window.location.search).get('IVAOTOKEN');

  const { signIn } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      window.location.href = '/';
    }

    if (!IVAOTOKEN) {
      const ivaoLoginUrl = 'https://login.ivao.aero/index.php?url={url}';
      const baseUrl = window.location.href;
      window.location.href = ivaoLoginUrl.replace('{url}', `${baseUrl}?redirect=${window.location.pathname}`);
      return;
    }

    const redirect = new URLSearchParams(window.location.search).get('redirect');

    signIn(IVAOTOKEN).then(() => {
      setTimeout(() => {
        navigate(redirect || '');
      }, 2000);
    });
  }, [IVAOTOKEN, signIn, navigate, user]);

  return <>Loading...</>;
};

export const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<RedirectToLogin />} />
      </Routes>
    </BrowserRouter>
  );
};
