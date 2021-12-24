import { User } from './User';

export interface Event {
  id: number;
  dateStart: number;
  dateEnd: number;
  eventName: string;
  privateSlots: number;
  pilotBriefing: string;
  atcBriefing: string;
  description: string;
  banner: string;
  atcBooking: string;
  creator?: User;
}
