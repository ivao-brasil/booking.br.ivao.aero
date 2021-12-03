import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { EventPage } from "../pages/UsersPage";

export const PrivateRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<HomePage />} />
        <Route path="/admin/users" element={<EventPage />} />
      </Routes>
    </BrowserRouter>
  );
};
