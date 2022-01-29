import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { AuthProvider } from './context/AuthContext';
import { IocProvider } from './context/IocContext';
import { NotificationProvider } from './context/NotificationContext';
import { theme } from './theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ONE_HOUR } from './constants';
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental';
import { persistQueryClient } from 'react-query/persistQueryClient-experimental';
import { Env } from './env';
import { ReactQueryDevtools } from 'react-query/devtools';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: ONE_HOUR,
    },
  },
});

const localStoragePersistor = createWebStoragePersistor({ storage: window.localStorage });

persistQueryClient({
  queryClient,
  persistor: localStoragePersistor,
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <IocProvider>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <NotificationProvider>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                {Env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
                <App />
              </LocalizationProvider>
            </NotificationProvider>
          </ThemeProvider>
        </AuthProvider>
      </IocProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
