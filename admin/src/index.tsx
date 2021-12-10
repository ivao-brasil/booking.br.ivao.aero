import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { AuthProvider } from './context/AuthContext';
import { IocProvider } from './context/IocContext';
import { NotificationProvider } from './context/NotificationContext';
import { theme } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <IocProvider>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <NotificationProvider>
            <App />
          </NotificationProvider>
        </ThemeProvider>
      </AuthProvider>
    </IocProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
