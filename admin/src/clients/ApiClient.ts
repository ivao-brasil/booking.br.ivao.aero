import Axios, { AxiosInstance } from 'axios';
import { Event } from '../types/Event';
import { User } from '../types/User';
import { Slot } from '../types/Slot';
import { Pagination } from '../types/Pagination';

interface AuthResponse {
  jwt: string;
}

interface UserRequest {
  suspended?: boolean;
  vid?: string;
  page?: number;
  perPage?: number;
}

const fromObjectToQueryString = (obj: any) => {
  const searchParams = new URLSearchParams();
  Object.keys(obj).forEach(key => searchParams.append(key, obj[key]));
  return searchParams.toString();
};

export class ApiClient {
  private axios: AxiosInstance;

  constructor(baseURL: string) {
    this.axios = Axios.create({
      baseURL,
    });
  }

  async auth(ivaoToken: string) {
    return this.axios.post<AuthResponse>('/auth', { 'ivao-token': ivaoToken }).then(response => response.data);
  }

  async getAuth(token: string): Promise<User> {
    return this.axios
      .get<User>('/auth', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => {
        return {
          ...response.data,
          admin: Boolean(response.data.admin),
          suspended: Boolean(response.data.suspended),
        };
      });
  }

  async getUsers(data: UserRequest, token: string) {
    const queryString = fromObjectToQueryString(data);
    return this.axios
      .get<Pagination<User>>(`/user?${queryString}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  async setUserBlock(user: User, suspended: boolean, token: string) {
    return this.axios.patch<void>(`/user/${user.id}`, { suspended }, { headers: { Authorization: `Bearer ${token}` } }).then(() => {});
  }

  async createEvent(data: Partial<Event>, token: string) {
    return this.axios
      .post<Partial<Event>>('/event', data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {});
  }

  async getEvents(token: string) {
    return this.axios
      .get<Array<Event>>('/event', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  async updateEvent(eventId: number, data: Partial<Event>, token: string) {
    return this.axios
      .put<Array<Event>>(`/event/${eventId}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  deleteEvent(event: Event, token: string) {
    return this.axios
      .delete(`/event/${event.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  async getSlotsByEvent(eventId: number, token: string) {
    return this.axios
      .get<Array<Slot>>(`/event/${eventId}/slot`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  createSlot(eventId: number, data: Partial<Slot>, token: string) {
    return this.axios
      .post(`/event/${eventId}/slot`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  updateSlot(slotId: number, data: Partial<Slot>, token: string) {
    return this.axios
      .put(`/slot/${slotId}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  deleteSlot(id: number, token: string) {
    return this.axios
      .delete(`/slot/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }
}
