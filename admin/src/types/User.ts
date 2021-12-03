import { AtcRating, PilotRating } from "./Ratings";

export interface User {
  id: number;
  vid: string;
  firstName: string;
  lastName: string;
  atcRating: AtcRating;
  pilotRating: PilotRating;
  division: string;
  country: string;
  isAdmin: boolean;
  suspended: boolean;
}
