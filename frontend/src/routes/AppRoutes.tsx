import { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SplashPage } from "pages/SplashPage";
import { LoginPage } from "pages/LoginPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { RequireAuth } from "../components/RequireAuth";

export const AppRoutes: FunctionComponent = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SplashPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="/events" element={<RequireAuth />}>
                <Route index element={<p>Events</p>} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
);
