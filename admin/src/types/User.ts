import { AtcRating, PilotRating } from "./Ratings";

export interface User {
  vid: string;
  firstName: string;
  lastName: string;
  atcRating: AtcRating;
  pilotRating: PilotRating;
  division: string;
  country: string;
}
