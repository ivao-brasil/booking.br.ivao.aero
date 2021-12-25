import { ConsentAnwsers, CookieConsentContext } from "context/CookieConsentContext";
import { CookieConsent } from "pages/CookieConsent/CookieConsent";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { PublicRoutes } from "./routes/PublicRoutes";

export const App = () => {
  const { cookieConsent } = useContext(CookieConsentContext);
  const { signed, loading } = useContext(AuthContext);

  if (cookieConsent === ConsentAnwsers.UNKNOW) {
    return <CookieConsent />;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return signed ? <PrivateRoutes /> : <PublicRoutes />;
};
