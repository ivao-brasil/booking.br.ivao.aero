import { User } from './User';
import { Event } from './Event';

export enum SlotType {
  TAKEOFF = 'takeoff',
  LANDING = 'landing',
}

export enum BookingStatus {
  FREE = 'free',
  PREBOOKED = 'prebooked',
  BOOKED = 'booked'
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
  bookingStatus: BookingStatus;
}

export interface PrivateSlotScheduleData {
  flightNumber: string;
  aircraft: string;
  origin: string;
  destination: string;
}

export enum SlotBookActions {
  BOOK,
  CANCEL,
  CONFIRM
}

export interface SlotCountByType {
  departure: number;
  landing: number;
  private: number;
}

export function getSlotAirline(slot: Slot) {
  return slot.flightNumber.slice(0, 3);
}

