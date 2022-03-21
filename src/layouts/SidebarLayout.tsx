import { FunctionComponent } from "react";
import { EventSidebar } from "components/event/sidebar/EventSidebar";
import { Outlet, useMatch } from "react-router-dom";
import { Footer } from "components/Footer";

export const SidebarLayout: FunctionComponent = () => {
    const isAtEventDetailsPage = useMatch("/event/:eventId") !== null;

    return (
        <div className="flex flex-col lg:flex-row">
            <div className="lg:flex-none lg:fixed lg:h-screen lg:z-50">
                <EventSidebar />
            </div>
            <div className={`flex flex-col min-h-screen ${isAtEventDetailsPage ? "container lg:ml-32 2xl:ml-auto" : "lg:ml-28 w-full"}`}>
                <main className="h-full">
                    <Outlet />
                </main>
                {isAtEventDetailsPage && <Footer />}
            </div>
        </div>
    )
}
