import { ConsentAnwsers, CookieConsentContext } from 'context/CookieConsentContext';
import { useContext } from 'react';
import ReactGA from 'react-ga';
import { AnalyticsTracking } from 'types/AnalyticsTracking';
import { Env } from "env";

export function useAnalyticsTracking(): AnalyticsTracking {
    const { cookieConsent } = useContext(CookieConsentContext);
    const trackingId = Env.ANALYTICS_TRACKING_ID;

    if (cookieConsent !== ConsentAnwsers.ACCEPTED || !trackingId) {
        let noopTracking: AnalyticsTracking = {
            initialize: () => {},
            pageview: (_: string) => {},
            modalview: (_: string) => {},
            setDimension: <T>(_: T) => {}
        };

        return noopTracking;
    }

    return {
        initialize: () => {
            ReactGA.initialize(trackingId);
        },

        pageview: (pagePath: string) => {
            ReactGA.pageview(pagePath);
        },

        modalview: (name: string) => {
            ReactGA.modalview(name);
        },

        setDimension: <T>(dimension: T) => {
            ReactGA.set(dimension);
        }
    }
}
