import { useContext } from "react";
import { IocContext } from "context/IocContext";
import { useQuery } from "react-query";
import { User } from "types/User";
import { AxiosError } from "axios";
import { ONE_HOUR } from "appConstants";

export function useAuthData() {
    const { apiClient } = useContext(IocContext);

    const authData = useQuery<User, AxiosError>("authData", async () => await apiClient.getAuth(), {
        staleTime: ONE_HOUR / 2, // 30 min
        retryOnMount: false
    });

    return authData;
}
