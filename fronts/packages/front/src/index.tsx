import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { CookieConsentProvider } from 'context/CookieConsentContext';
import { AuthProvider } from 'context/AuthContext';
import { IocProvider } from 'context/IocContext';
import { ThemeContextProvider } from 'context/ThemeContext';
import { ONE_DAY } from 'appConstants';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            useErrorBoundary: true,
            staleTime: ONE_DAY
        }
    }
});

ReactDOM.render(
    <React.StrictMode>
        <IocProvider>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <AuthProvider>
                        <CookieConsentProvider>
                            <ThemeContextProvider>
                                <App />
                            </ThemeContextProvider>
                        </CookieConsentProvider>
                    </AuthProvider>
                </BrowserRouter>
            </QueryClientProvider>
        </IocProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
