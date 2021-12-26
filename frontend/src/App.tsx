import { useContext } from "react";
import { AuthContext } from "context/AuthContext";
import { AppRoutes } from "routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { ErrorPage } from 'pages/ErrorPage';

export const App = () => {
  const { loading } = useContext(AuthContext);

  return (
    <div className="dark:bg-black min-h-screen">
      <ErrorPage>
        {(loading ? <p>Loading...</p> : (
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>)
        )}
      </ErrorPage>

    </div>
  );
};
