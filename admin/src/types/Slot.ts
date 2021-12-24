import { User } from './User';
import { Event } from './Event';

export enum SlotType {
  TAKEOFF = 'takeoff',
  LANDING = 'landing',
}

export interface Slot {
  id: number;
  origin: string;
  destination: string;
  type: SlotType;
  private: boolean;
  slotTime: string;
  gate: string;
  aircraft: string;
  owner?: User;
  event?: Event;
  flightNumber: string;
}
