import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { AuthProvider } from "./context/AuthContext";
import { IocProvider } from "./context/IocContext";
import { Env } from "./env";
import "./index.css";

console.log(Env.API_HOST);

ReactDOM.render(
  <React.StrictMode>
    <IocProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </IocProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
