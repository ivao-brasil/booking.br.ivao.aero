import { Airport } from './Airport';
import { User } from './User';

export enum EventType {
  RFE = 'rfe',
  RFO = 'rfo',
  MSA = 'msa',
}

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
  type: EventType;
  airports: Array<Airport>;
}
