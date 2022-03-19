import { ConsentAnwsers, CookieConsentContext } from 'context/CookieConsentContext';
import { useContext } from 'react';
import ReactGA from 'react-ga';
import { AnalyticsTracking } from 'types/AnalyticsTracking';

export function useAnalyticsTracking(): AnalyticsTracking {
    const { cookieConsent } = useContext(CookieConsentContext);

    if (cookieConsent !== ConsentAnwsers.ACCEPTED) {
        let noopTracking: AnalyticsTracking = {
            initialize: (_: string) => {},
            pageview: (_: string) => {},
            modalview: (_: string) => {},
            setDimension: <T>(_: T) => {}
        };

        return noopTracking;
    }

    return {
        initialize: (trackingId: string) => {
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
