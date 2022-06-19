import { Airport } from './Airport';
import { User } from './User';

type EventTypes = "rfe" | "rfo" | "msa";

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
  type: EventTypes;
  airports: Airport[];
  has_started: boolean;
  has_ended: boolean;
  can_confirm_slots: boolean;
}

const eventTypesNames = {
  "rfe": "Real Flight Event",
  "rfo": "Real Flight Operations",
  "mse": "Mega Slot Event"
}

export function getEventTypeName(eventType: string) {
  if (eventType in eventTypesNames) {
    return eventTypesNames[eventType as keyof typeof eventTypesNames];
  }

  return eventType;
}

