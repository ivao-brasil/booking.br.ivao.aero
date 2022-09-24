import { FunctionComponent, lazy, Suspense, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { RequireAuthGuard } from "components/guards/RequireAuthGuard";
import { ConsentAnwsers, CookieConsentContext } from "context/CookieConsentContext";
import { SplashPage } from "pages/SplashPage/SplashPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { LoadingIndicator } from "components/LoadingIndicator/LoadingIndicator";
import { SidebarLayout } from "layouts/SidebarLayout";
import { ActiveEventGuard } from "components/guards/ActiveEventGuard";

const CookieConsentPage = lazy(() => import("pages/CookieConsent/CookieConsentPage"));
const LoginPage = lazy(() => import("pages/LoginPage"));
const LogoutPage = lazy(() => import("pages/LogoutPage"));
const EventsListPage = lazy(() => import("pages/EventsList/EventsListPage"));

const EventDetailsPage = lazy(() => import("pages/Event/EventDetailsPage"));
const SlotsPage = lazy(() => import("pages/Event/SlotsPage"));

const SlotScheduledPage = lazy(() => import("pages/Slot/SlotScheduled"));
const UserSlotsPage = lazy(() => import("pages/Slot/UserSlots"));
const ConfirmSchedulePage = lazy(() => import("pages/Slot/ConfirmShedule"));
const SlotConfirmed = lazy(() => import("pages/Slot/SlotConfirmed"));
const SlotCancelled = lazy(() => import("pages/Slot/SlotCancelled"));

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
                        <Route element={<RequireAuthGuard />}>
                            <Route path="/events" element={<EventsListPage />} />
                            <Route element={<ActiveEventGuard />}>
                                <Route path="/event/:eventId" element={<SidebarLayout />}>
                                    <Route index element={<EventDetailsPage />} />
                                    <Route path="slots" element={<SlotsPage />} />
                                    <Route path="my-slots" element={<UserSlotsPage />} />
                                    <Route path="schedule/:slotId" element={<ConfirmSchedulePage />} />
                                </Route>
                            </Route>
                            <Route path="/slot">
                                <Route path="scheduled" element={<SlotScheduledPage />} />
                                <Route path="confirmed" element={<SlotConfirmed />} />
                                <Route path="cancelled" element={<SlotCancelled />} />
                            </Route>
                            <Route path="logout" element={<LogoutPage />} />
                        </Route>
                        <Route path="/404" element={<NotFoundPage />} />
                        <Route path="*" element={<Navigate to="/404" replace />} />
                    </>
                )}

            </Routes>
        </Suspense>
    );
};
