import { AxiosInstance } from 'axios'
import { User } from "types/User";
import { Pagination } from "types/Pagination";
import { Event } from "types/Event";
import { Scenary } from 'types/Scenary';
import { PrivateSlotScheduleData, Slot, SlotCountByType } from 'types/Slot';
import { SlotTypeOptions } from 'types/SlotFilter';
import { FilterState } from 'components/filter/Filter';
import { AirportDetails } from 'types/AirportDetails';

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

  async getEvents(data: PaginateRequest) {
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

  async getEventSlots(
    eventId: number,
    pageData: PaginateRequest,
    slotType?: SlotTypeOptions | null,
    filterState?: Partial<FilterState>
  ) {
    const queryString = this.getEventSlotsQuery(
      pageData,
      slotType,
      filterState
    );

    return this.axios
      .get<Pagination<Slot>>(`/event/${eventId}/slot?${queryString}`)
      .then(response => response.data);
  }

  async getUserSlots(eventId: number, pageData: PaginateRequest, flightNumber?: string | null) {
    let queryString = fromObjectToQueryString(pageData);

    if (flightNumber) {
      queryString += "&" + fromObjectToQueryString({ "flightNumber": flightNumber });
    }

    return this.axios
      .get<Pagination<Slot>>(`/event/${eventId}/slot/mine?${queryString}`)
      .then(response => response.data);
  }

  async scheduleSlot(slotId: number, privateSlotData?: PrivateSlotScheduleData) {
    return this.axios
      .patch<any>(`/slot/${slotId}/book`, privateSlotData)
      .then(response => response.data);
  }

  async cancelSchedule(slotId: number) {
    return this.axios
      .patch<any>(`/slot/${slotId}/cancel`)
      .then(response => response.data);
  }

  async confirmSchedule(slotId: number) {
    return this.axios
      .patch<any>(`/slot/${slotId}/confirm`)
      .then(response => response.data);
  }

  async getAirlineLogo(airline: string) {
    return this.axios
      .get<Blob>(`/logo/airline/${airline}`, { responseType: 'blob' })
      .then(response => new Blob([response.data], { type: response.headers["content-type"] }));
  }

  async getAirportDetails(icao: string) {
    return this.axios
      .get<AirportDetails>(`/airport/details/${icao}`)
      .then(response => response.data);
  }

  async getSlotCountByType(eventId: number) {
    return this.axios
      .get<SlotCountByType>(`/event/${eventId}/slot/count`)
      .then(response => response.data);
  }

  public get token() {
    return this._token;
  }

  public set token(value: string) {
    this._token = value;
    this.axios.defaults.headers.common['Authorization'] = `Bearer ${value}`;
  }

  private getEventSlotsQuery(
    pageData: PaginateRequest,
    slotType?: SlotTypeOptions | null,
    filterState?: Partial<FilterState>
  ) {
    let queryString = fromObjectToQueryString(pageData);

    if (!filterState?.flightNumber) {
      if (slotType === SlotTypeOptions.PRIVATE) {
        queryString += "&" + fromObjectToQueryString({ "private": true });
      } else if (slotType !== null && slotType !== undefined) {
        queryString += "&" + fromObjectToQueryString({
          "type": SlotTypeOptions[slotType].toLowerCase(),
          "private": false
        });
      }
    }

    if (filterState) {
      queryString += "&" + fromObjectToQueryString(filterState);
    }

    return queryString;
  }
}
