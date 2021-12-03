import Axios, { AxiosInstance } from "axios";
import { User } from "../types/User";

interface AuthResponse {
  jwt: string;
}

interface UserRequest {
  suspended?: boolean;
  vid?: string;
}

export class ApiClient {
  private axios: AxiosInstance;

  constructor(baseURL: string) {
    this.axios = Axios.create({
      baseURL,
    });
  }

  async auth(ivaoToken: string) {
    return this.axios
      .post<AuthResponse>("/auth", { "ivao-token": ivaoToken })
      .then((response) => response.data);
  }

  async getAuth(token: string): Promise<User> {
    return this.axios
      .get<User>("/auth", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        return {
          ...response.data,
          isAdmin: Boolean(response.data.isAdmin),
          suspended: Boolean(response.data.suspended),
        };
      });
  }

  async getUsers(data: UserRequest, token: string): Promise<Array<User>> {
    return this.axios
      .get<Array<User>>("/user", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data);
  }

  async setUserBlock(user: User, suspended: boolean, token: string) {
    return this.axios
      .patch(
        `/user/${user.id}`,
        { suspended },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => response.data);
  }
}
