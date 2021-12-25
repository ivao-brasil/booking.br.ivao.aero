import { useContext } from "react";
import { ConsentAnwsers, CookieConsentContext } from "context/CookieConsentContext";
import { CookieConsentPage } from "pages/CookieConsent/CookieConsentPage";
import { AuthContext } from "context/AuthContext";
import { AppRoutes } from "routes/AppRoutes";

export const App = () => {
  const { cookieConsent } = useContext(CookieConsentContext);
  const { loading } = useContext(AuthContext);

  return (
    <div className="dark:bg-black min-h-screen">
      {(loading ? <p>Loading...</p> : (cookieConsent === ConsentAnwsers.UNKNOW) ? <CookieConsentPage /> : <AppRoutes />)}
    </div>
  );
};
