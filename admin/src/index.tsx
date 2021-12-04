import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { AuthProvider } from "./context/AuthContext";
import { IocProvider } from "./context/IocContext";
import { NotificationProvider } from "./context/NotificationContext/NotificationContext";

ReactDOM.render(
  <React.StrictMode>
    <IocProvider>
      <AuthProvider>
        <NotificationProvider>
          <App />
        </NotificationProvider>
      </AuthProvider>
    </IocProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
