import { FunctionComponent, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "components/RequireAuth";
import { ConsentAnwsers, CookieConsentContext } from "context/CookieConsentContext";
import { SplashPage } from "pages/SplashPage";
import { LoginPage } from "pages/LoginPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { CookieConsentPage } from "pages/CookieConsent/CookieConsentPage";

export const AppRoutes: FunctionComponent = () => {
    const { cookieConsent } = useContext(CookieConsentContext);
    if (cookieConsent === ConsentAnwsers.UNKNOW) {
        return (
            <Routes>
                <Route path="*" element={<CookieConsentPage />} />
            </Routes>
        );
    }

    return (
        <Routes>
            <Route path="/" element={<SplashPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="/events" element={<RequireAuth />}>
                <Route index element={<p>Events</p>} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};
