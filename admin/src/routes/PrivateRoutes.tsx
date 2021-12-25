import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EventsPage } from '../pages/events/EventsPage';
import { HomePage } from '../pages/home/HomePage';
import { UsersPage } from '../pages/users/UsersPage';
import { SlotsPage } from '../pages/slots/SlotsPage';

export const PrivateRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<HomePage />} />
        <Route path="/admin/users" element={<UsersPage />} />
        <Route path="/admin/events" element={<EventsPage />} />
        <Route path="/admin/events/:eventId/slots" element={<SlotsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
