export type ScenarySimulators = "fs9" | "fsx" | "p3d" | "xp11" | "msfs";

export interface Scenary {
    id: number;
    title: string;
    license: "freeware" | "payware";
    link: string;
    simulator: ScenarySimulators;
}
