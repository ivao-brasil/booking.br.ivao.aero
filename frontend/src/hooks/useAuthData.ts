import { useContext } from "react";
import { IocContext } from "context/IocContext";
import { useQuery } from "react-query";
import { User } from "types/User";
import { AxiosError } from "axios";

export function useAuthData() {
    const { apiClient: authClient } = useContext(IocContext);

    const authData = useQuery<User, AxiosError>("authData", async() => {
        return await authClient.getAuth();
    }, {
        staleTime: (1000 * 60 * 60 * 30), // 30 min
        retryOnMount: false
    });

    return authData;
}
