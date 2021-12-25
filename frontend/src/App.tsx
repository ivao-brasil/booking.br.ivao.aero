import { useContext } from "react";
import { ConsentAnwsers, CookieConsentContext } from "context/CookieConsentContext";
import { CookieConsentPage } from "pages/CookieConsent/CookieConsentPage";
import { AuthContext } from "context/AuthContext";
import { AppRoutes } from "routes/AppRoutes";

export const App = () => {
  const { cookieConsent } = useContext(CookieConsentContext);
  const { loading } = useContext(AuthContext);

  if (cookieConsent === ConsentAnwsers.UNKNOW) {
    return <CookieConsentPage />;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <AppRoutes />
  );
};
