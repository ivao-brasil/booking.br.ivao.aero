import { AxiosError } from "axios";
import { IocContext } from "context/IocContext";
import { useContext } from "react";
import { useQuery } from "react-query";
import { Division } from "types/Division";

export function useDivisions() {
  const { apiClient } = useContext(IocContext);
  return useQuery<Division[], AxiosError>("divisions", async() => await apiClient.getDivisions());
}
