import { AxiosInstance } from 'axios'
import { User } from "types/User";
import { Pagination } from "types/Pagination";
import { Event } from "types/Event";
import { Scenary } from 'types/Scenary';

interface AuthResponse {
  jwt: string;
}

interface PaginateRequest {
  perPage?: number;
  page?: number;
}

const fromObjectToQueryString = (obj: any) => {
  const searchParams = new URLSearchParams();
  Object.keys(obj).forEach(key => searchParams.append(key, obj[key]));
  return searchParams.toString();
};

export class ApiClient {
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

  async getEvents(data: PaginateRequest = {}) {
    const queryString = fromObjectToQueryString(data);
    return this.axios
      .get<Pagination<Event>>(`/event?${queryString}`)
      .then(response => response.data);
  }

  async getEvent(id: number) {
    return this.axios
      .get<Event>(`/event/${id}`)
      .then(response => response.data);
  }

  async getEventSceneries(eventId: number) {
    return this.axios
      .get<Scenary[]>(`/event/${eventId}/scenery`)
      .then(response => response.data);
  }

  public get token() {
    return this._token;
  }

  public set token(value: string) {
    this._token = value;
    this.axios.defaults.headers.common['Authorization'] = `Bearer ${value}`;
  }
}
