import { AxiosInstance } from 'axios'
import { Env } from "../env";
import { User } from "../types/User";


interface AuthResponse {
  jwt: string;
}

interface UserRequest {
  suspended?: boolean;
  vid?: string;
}


export class AuthApiClient {
  private axios: AxiosInstance;
  private _token: string = "";

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async auth(ivaoToken: string) {
    const payload = { "ivao-token": ivaoToken }
    const { data } = await this.axios.post<AuthResponse>("/auth", payload)
    this.token = data.jwt;
    return data
  }

  async getAuth(): Promise<User> {
    return this.axios
      .get<User>("/auth")
      .then((response) => {
        return {
          ...response.data,
          isAdmin: Boolean(response.data.isAdmin),
          suspended: Boolean(response.data.suspended),
        };
      });
  }

  public get token() {
    return this._token;
  }

  public set token(value: string) {
    this._token = value;
    this.axios.defaults.headers.common['Authorization'] = `Bearer ${value}`;
  }
}