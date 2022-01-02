import axios from 'axios'
import { createContext, FunctionComponent, useMemo } from "react";
import { ApiClient } from "clients/ApiClient";
import { Env } from "../env";

interface IIocContext {
  apiClient: ApiClient;
}

const axiosInstance = axios.create({
  baseURL: Env.API_HOST
});

export const IocContext = createContext<IIocContext>({} as IIocContext);

export const IocProvider: FunctionComponent = ({ children }) => {
  const iocValue = useMemo<IIocContext>(() => {
    return {
      apiClient: new ApiClient(axiosInstance)
    }
  }, []);

  return (
    <IocContext.Provider value={iocValue}>{children}</IocContext.Provider>
  );
};
