import { User } from './User';
import { Airport } from './Airport';

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
}

const eventTypesNames = {
  "rfe": "Real Flight Event",
  "rfo": "Real Flight Operations",
  "mse": "Mega Slot Events"
}

export function getEventTypeName(eventType: string) {
  if (eventType in eventTypesNames) {
    return eventTypesNames[eventType as keyof typeof eventTypesNames];
  }

  return eventType;
}

