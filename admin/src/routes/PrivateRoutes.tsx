import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EventsPage } from "../pages/EventsPage";
import { HomePage } from "../pages/HomePage";
import { UsersPage } from "../pages/UsersPage";

export const PrivateRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<HomePage />} />
        <Route path="/admin/users" element={<UsersPage />} />
        <Route path="/admin/events" element={<EventsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
