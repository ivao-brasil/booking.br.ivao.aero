import { AppRoutes } from "routes/AppRoutes";
import { ErrorPage } from 'pages/ErrorPage';

export const App = () => {
  return (
    <div className="dark:bg-black dark:text-white min-h-screen">
      <ErrorPage>
        <AppRoutes />
      </ErrorPage>
    </div>
  );
};
