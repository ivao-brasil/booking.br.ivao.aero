import { useAnalyticsTracking } from "hooks/useAnalyticsTracking";
import { FunctionComponent, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const AppTracking: FunctionComponent = ({ children }) => {
    const { initialize, pageview } = useAnalyticsTracking();
    const location = useLocation();

    initialize();

    useEffect(() => {
        pageview(location.pathname + location.search);
    }, [location, pageview]);

    return (
        <>{children}</>
    );
};
