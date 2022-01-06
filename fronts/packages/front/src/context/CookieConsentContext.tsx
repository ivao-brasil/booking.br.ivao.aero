import { createContext, FunctionComponent, useCallback, useLayoutEffect, useState } from "react";

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

    useLayoutEffect(() => {
        const storedConsentValue = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedConsentValue !== null) {
            setConsentState(ConsentAnwsers[storedConsentValue as keyof typeof ConsentAnwsers]);
        }
    }, [setConsentState]);

    const setCookieConsent = useCallback((value: ConsentAnwsers) => {
        try {
            localStorage.setItem(LOCAL_STORAGE_KEY, ConsentAnwsers[value]);
        } catch (e) {
            // Unable to insert to localstorage, just log the error.
            // Maybe the user is using the anonymous tab?
            console.error(e);
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
