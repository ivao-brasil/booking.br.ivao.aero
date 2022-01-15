import { User } from './User';

export interface Event {
  id: number;
  division: string;
  dateStart: string;
  dateEnd: string;
  eventName: string;
  privateSlots: number;
  pilotBriefing: string;
  atcBriefing: string;
  description: string;
  banner: string;
  atcBooking: string;
  status: "created" | "scheduled" | "finished";
  public: boolean;
  creator?: User;
}
