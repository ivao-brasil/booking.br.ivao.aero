import { createContext, FunctionComponent, useCallback, useEffect, useState } from "react";

export enum ConsentAnwsers {
    UNKNOW,
    ACCEPTED,
    DECLINED
}

interface ICookieConsentContext {
    cookieConsent: ConsentAnwsers,
    setCookieConsent: (value: ConsentAnwsers) => void
};

export const CookieConsentContext = createContext<ICookieConsentContext>({} as ICookieConsentContext);

export const CookieConsentProvider: FunctionComponent = ({ children }) => {
    const [cookieConsent, setConsentState] = useState(ConsentAnwsers.UNKNOW);
    const LOCAL_STORAGE_KEY = "cookieConsent";

    useEffect(() => {
        const hasAcceptedCookies = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (hasAcceptedCookies !== null) {
            setConsentState(ConsentAnwsers.ACCEPTED);
        }
    }, [setConsentState]);

    const setCookieConsent = useCallback((value: ConsentAnwsers) => {
        if (value === ConsentAnwsers.ACCEPTED) {
            try {
                localStorage.setItem(LOCAL_STORAGE_KEY, "1");
            } catch (e) {
                // Unable to insert to localstorage, just log the error.
                // Maybe the user is using the anonymous tab?
                console.error(e);
            }
        }

        setConsentState(value);
    }, [setConsentState]);

    return (
        <CookieConsentContext.Provider value={{
            cookieConsent,
            setCookieConsent
        }}>
            {children}
        </CookieConsentContext.Provider>
    );
};
