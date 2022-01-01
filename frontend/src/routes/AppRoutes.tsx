import { FunctionComponent, lazy, Suspense, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "components/RequireAuth";
import { ConsentAnwsers, CookieConsentContext } from "context/CookieConsentContext";
import { SplashPage } from "pages/SplashPage";
import { MutedText } from "components/typography/Typography";
import { NotFoundPage } from "pages/NotFoundPage";

const CookieConsentPage = lazy(() => import("pages/CookieConsent/CookieConsentPage"));
const LoginPage = lazy(() => import("pages/LoginPage"));
const EventsPage = lazy(() => import("pages/EventsPage"));
const EventPage = lazy(() => import("pages/EventPage"));

export const AppRoutes: FunctionComponent = () => {
    const { cookieConsent } = useContext(CookieConsentContext);

    return (
        <Suspense fallback={<MutedText>Loading...</MutedText>}>
            <Routes>
                {cookieConsent === ConsentAnwsers.UNKNOW ? (
                    <Route path="*" element={<CookieConsentPage />} />
                ) : (
                    <>
                        <Route path="/" element={<SplashPage />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route element={<RequireAuth />}>
                            <Route path="/events" element={<EventsPage />} />
                            <Route path="/event/:id" element={<EventPage />} />
                        </Route>
                        <Route path="*" element={<NotFoundPage />} />
                    </>
                )}

            </Routes>
        </Suspense>
    );
};
