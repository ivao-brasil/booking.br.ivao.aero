import { Scenary } from "./Scenary";

export interface Airport {
    id: number;
    eventId: number;
    icao: string;
    sceneries: Scenary[];
}
