import axios from 'axios'
import { createContext, FunctionComponent, useMemo } from "react";
import { AuthApiClient } from "../clients/auth.client";
import { Env } from "../env";

interface IIocContext {
  authClient: AuthApiClient;
}

const axiosInstance = axios.create({
  baseURL: Env.API_HOST
});

export const IocContext = createContext<IIocContext>({} as IIocContext);

export const IocProvider: FunctionComponent = ({ children }) => {
  const iocValue = useMemo<IIocContext>(() => {
    return {
      authClient: new AuthApiClient(axiosInstance)
    }
  }, [])

  return (
    <IocContext.Provider value={iocValue}>{children}</IocContext.Provider>
  );
};
