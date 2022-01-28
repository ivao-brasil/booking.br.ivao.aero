import Axios, { AxiosInstance } from 'axios';
import { Event, EventType } from '../types/Event';
import { Pagination } from '../types/Pagination';
import { Slot } from '../types/Slot';
import { User } from '../types/User';

interface AuthResponse {
  jwt: string;
}

interface PaginateRequest {
  perPage?: number;
  page?: number;
}

export interface CreateEventRequest {
  dateStart: number;
  dateEnd: number;
  eventName: string;
  privateSlots: number;
  pilotBriefing: string;
  atcBriefing: string;
  description: string;
  banner: string;
  atcBooking: string;
  type: EventType;
  airports: string;
}

interface UserRequest extends PaginateRequest {
  suspended?: boolean;
  vid?: string;
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

  async createEvent(data: CreateEventRequest, token: string) {
    return this.axios
      .post<Partial<Event>>('/event', data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {});
  }

  async getEvents(token: string, data: PaginateRequest = {}) {
    const queryString = fromObjectToQueryString(data);
    return this.axios
      .get<Pagination<Event>>(`/event${queryString}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }

  async updateEvent(eventId: number, data: CreateEventRequest, token: string) {
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

  async getSlotsByEvent(eventId: number, token: string, filter?: PaginateRequest) {
    const queryString = fromObjectToQueryString(filter);
    return this.axios
      .get<Pagination<Slot>>(`/event/${eventId}/slot?${queryString}`, {
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

  createManySlots(eventId: number, token: string, data: FormData) {
    return this.axios
      .post(`/event/${eventId}/slot/many`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => response.data);
  }
}
