import { AppRoutes } from "routes/AppRoutes";
import { ErrorPage } from 'pages/ErrorPage';
import { AppTracking } from "components/tracking/AppTracking";

export const App = () => {
  return (
    <div className="dark:bg-black dark:text-white min-h-screen">
      <ErrorPage>
        <AppTracking>
          <AppRoutes />
        </AppTracking>
      </ErrorPage>
    </div>
  );
};
