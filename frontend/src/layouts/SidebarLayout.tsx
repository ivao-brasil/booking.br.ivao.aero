import { FunctionComponent, useState } from "react";
import { EventSidebar } from "components/EventSidebar";
import { Outlet } from "react-router-dom";
import { Footer } from "components/Footer";

export const SidebarLayout: FunctionComponent = () => {
    const [sidebarVisible, setSidebarVisible] = useState(true);

    return (
        <div className="flex flex-col md:flex-row">
            <EventSidebar />
            <div className="container flex flex-col min-h-screen pt-16">
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    )
}
