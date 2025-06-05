import { User } from './User';
import { Event } from './Event';

export enum SlotType {
  TAKEOFF = 'takeoff',
  LANDING = 'landing',
  TAKEOFF_LANDING = 'departureLanding'
}

export enum BookingStatus {
  FREE = 'free',
  PREBOOKED = 'prebooked',
  BOOKED = 'booked'
}

export interface Slot {
  id: number;
  origin: string;
  isFixedOrigin: boolean;
  destination: string;
  isFixedDestination: boolean;
  type: SlotType;
  slotTime: string;
  gate: string;
  aircraft: string;
  isFixedAicraft: boolean;
  owner?: User;
  event?: Event;
  flightNumber: string;
  isFixedFlightNumber: boolean;
  bookingStatus: BookingStatus;
}

export interface SlotScheduleData {
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
  departureLanding: number;
}

export function getSlotAirline(slot: Slot) {
  return slot.flightNumber.slice(0, 3);
}

