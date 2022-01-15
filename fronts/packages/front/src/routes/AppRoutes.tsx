import { FunctionComponent, lazy, Suspense, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { RequireAuth } from "components/RequireAuth";
import { ConsentAnwsers, CookieConsentContext } from "context/CookieConsentContext";
import { SplashPage } from "pages/SplashPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { LoadingIndicator } from "components/LoadingIndicator";
import { SidebarLayout } from "layouts/SidebarLayout";

const CookieConsentPage = lazy(() => import("pages/CookieConsent/CookieConsentPage"));
const LoginPage = lazy(() => import("pages/LoginPage"));
const EventsPage = lazy(() => import("pages/EventsPage/EventsPage"));
const EventPage = lazy(() => import("pages/EventPage"));
const FlightsPage = lazy(() => import("pages/FlightsPage"));

export const AppRoutes: FunctionComponent = () => {
    const { cookieConsent } = useContext(CookieConsentContext);

    return (
        <Suspense fallback={<LoadingIndicator />}>
            <Routes>
                {cookieConsent === ConsentAnwsers.UNKNOW ? (
                    <Route path="*" element={<CookieConsentPage />} />
                ) : (
                    <>
                        <Route path="/" element={<SplashPage />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route element={<RequireAuth />}>
                            <Route path="/events" element={<EventsPage />} />
                            <Route path="/event/:eventId" element={<SidebarLayout />}>
                                <Route index element={<EventPage />} />
                                <Route path="flights" element={<FlightsPage />} />
                            </Route>
                        </Route>
                        <Route path="/404" element={<NotFoundPage />} />
                        <Route path="*" element={<Navigate to="/404" />} />
                    </>
                )}

            </Routes>
        </Suspense>
    );
};
