import axios from 'axios'
import { createContext, FunctionComponent, useMemo } from "react";
import { AuthApiClient } from "../clients/ApiClient";
import { Env } from "../env";

interface IIocContext {
  apiClient: AuthApiClient;
}

const axiosInstance = axios.create({
  baseURL: Env.API_HOST
});

export const IocContext = createContext<IIocContext>({} as IIocContext);

export const IocProvider: FunctionComponent = ({ children }) => {
  const iocValue = useMemo<IIocContext>(() => {
    return {
      apiClient: new AuthApiClient(axiosInstance)
    }
  }, []);

  return (
    <IocContext.Provider value={iocValue}>{children}</IocContext.Provider>
  );
};
