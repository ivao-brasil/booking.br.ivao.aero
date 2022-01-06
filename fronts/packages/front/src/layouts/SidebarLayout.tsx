import { EventSidebar } from "components/EventSidebar";
import { Footer } from "components/Footer";
import { FunctionComponent } from "react";
import { Outlet, useMatch } from "react-router-dom";

export const SidebarLayout: FunctionComponent = () => {
  const routeMatch = useMatch("/event/:eventId");

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:flex-none">
        <EventSidebar />
      </div>
      <div
        className={`flex flex-col min-h-screen pt-16 ${
          routeMatch !== null ? "container" : "w-full"
        }`}
      >
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};
