import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import { FaPlane } from "react-icons/fa";
import { SlotBookButton } from "./SlotBookButton";
import { getSlotAirline, PrivateSlotScheduleData, Slot, SlotType } from "types/Slot";
import { InputField } from "components/InputField";
import { ActionButton } from "components/button/Button";
import { LoadingIndicator } from "components/LoadingIndicator/LoadingIndicator";
import { AirportDetails } from "types/AirportDetails";

interface SlotsTableProps {
    slots: Slot[];
    airlineImages?: Array<Blob | null>;
    hasMoreFlights?: boolean;
    isFecthingMoreFlights?: boolean;
    airportDetailsMap?: Record<string, AirportDetails>;
    onSlotBook: (slotId: number, slotData?: PrivateSlotScheduleData) => void;
    onMoreFlightsRequested?: () => void;
}

interface FormValueMap {
    [key: number]: {
        "flightNumber": string;
        "aircraft": string;
        "origin": string;
        "destination": string;
    } | undefined;
}

export const SlotsTable: FunctionComponent<SlotsTableProps> = ({
    slots, airlineImages, airportDetailsMap, hasMoreFlights,
    isFecthingMoreFlights, onSlotBook, onMoreFlightsRequested
}) => {
    const [formValues, setFormValues] = useState<FormValueMap>({});

    const handleLineInputChange = (slotId: number, evt: ChangeEvent<HTMLInputElement>) => {
        updateFormValues(slotId, evt.target.name as keyof PrivateSlotScheduleData, evt.target.value);
    }

    const updateFormValues = (slotId: number, key: keyof PrivateSlotScheduleData, value: string) => {
        setFormValues(prevState => {
            if (prevState === undefined) {
                prevState = {};
            }

            return {
                ...prevState,
                [slotId]: {
                    ...prevState[slotId],
                    [key]: value
                }
            } as FormValueMap;
        });
    }

    const handleSlotScheduling = (slotId: number) => {
        onSlotBook(slotId, formValues[slotId]);
    }

    const isPrivateSlotAndBookable = (slot: Slot) => slot.private && !slot.owner;

    const getAirportFullName = (icao: string, detailsMap?: Record<string, AirportDetails>) => {
        if (!detailsMap) {
            return "";
        }

        const airportDetails = detailsMap[icao];

        if (!airportDetails) {
            return "";
        }

        let airportName = airportDetails.name;
        // Initially the HQ API returns the airport name in the format:
        // São Paulo/Guarulhos / Governador André Franco Montoro Intl
        if (airportName.indexOf(" / ") !== -1) {
            const [, airportFullName] = airportName.split(" / ");
            airportName = airportFullName;
        }

        return airportName;
    };

    useEffect(() => {
        slots.forEach((slot) => {
            if (!isPrivateSlotAndBookable(slot)) {
                return;
            }

            if (slot.type === SlotType.LANDING) {
                updateFormValues(slot.id, "destination", slot.destination);
            } else if (slot.type === SlotType.TAKEOFF) {
                updateFormValues(slot.id, "origin", slot.origin);
            }
        });
    }, [slots]);

    return (
        <table className="border-separate text-center min-w-full" style={{ borderSpacing: "0 16px" }}>
            <thead>
                <tr className="text-[12px] text-[#A0A0A0] dark:text-light-gray-5 text-center font-semibold leading-7 font-header text-sm whitespace-nowrap">
                    <th aria-label="Logo da companhia" className="invisible"></th>
                    <th className="px-3">Número do voo</th>
                    <th className="px-3">Aeronave</th>
                    <th className="px-3">Partida</th>
                    <th className="invisible w-10"></th>
                    <th className="px-3">Chegada</th>
                    <th className="px-3">EOBT</th>
                    <th className="px-3">Posição</th>
                    <th className="invisible w-32"></th>
                </tr>
            </thead>
            <tbody>
                {slots.map((slot, idx) => {
                    const originAirportName = getAirportFullName(slot.origin, airportDetailsMap);
                    const destinationAirportName = getAirportFullName(slot.destination, airportDetailsMap);

                    return (
                        <tr
                            key={slot.id}
                            className="h-13 pt-4 bg-white dark:bg-black shadow-md text-blue dark:text-white font-header font-semibold text-sm whitespace-nowrap"
                        >
                            <td className="p-0 rounded-l-lg bg-transparent">
                                {airlineImages && airlineImages[idx] && (
                                    <img
                                        className="mx-auto rounded-l-lg"
                                        width={96}
                                        height={60}
                                        src={URL.createObjectURL(airlineImages[idx] as Blob)}
                                        alt={`Logo companhia ${getSlotAirline(slot)}`}
                                    />
                                )}
                            </td>

                            {isPrivateSlotAndBookable(slot)
                                ? (
                                    <td>
                                        <label htmlFor={`flightNumber-${slot.id}`} className="sr-only">
                                            Número do voo
                                        </label>
                                        <InputField
                                            name="flightNumber"
                                            id={`flightNumber-${slot.id}`}
                                            type="text"
                                            placeholder="Número do voo"
                                            value={formValues[slot.id]?.flightNumber || ""}
                                            onChange={(evt) => handleLineInputChange(slot.id, evt)} />
                                    </td>
                                )
                                : (
                                    <td className="font-action text-[17px] px-3">
                                        {slot.flightNumber}
                                    </td>
                                )}

                            {isPrivateSlotAndBookable(slot)
                                ? (
                                    <td>
                                        <label htmlFor={`aircraft-${slot.id}`} className="sr-only">
                                            Tipo de aeronave
                                        </label>
                                        <InputField
                                            name="aircraft"
                                            id={`aircraft-${slot.id}`}
                                            type="text"
                                            placeholder="Tipo de aeronave"
                                            value={formValues[slot.id]?.aircraft || ""}
                                            onChange={(evt) => handleLineInputChange(slot.id, evt)} />
                                    </td>
                                )
                                : (
                                    <td className="px-3">
                                        {slot.aircraft}
                                    </td>
                                )}

                            {isPrivateSlotAndBookable(slot) && (slot.type !== SlotType.TAKEOFF || !slot.origin)
                                ? (
                                    <td>
                                        <label htmlFor={`origin-${slot.id}`} className="sr-only">
                                            Origem
                                        </label>
                                        <InputField
                                            name="origin"
                                            id={`origin-${slot.id}`}
                                            type="text"
                                            placeholder="Origem"
                                            value={formValues[slot.id]?.origin || ""}
                                            onChange={(evt) => handleLineInputChange(slot.id, evt)} />
                                    </td>
                                )
                                : (
                                    <td className="text-center px-3">
                                        <span className="font-header font-bold text-[18px] leading-6">{slot.origin || "ZZZZ"}</span>
                                        <p
                                            className="w-32 mx-auto font-action font-normal text-xs leading-3 text-center truncate"
                                            title={originAirportName}
                                        >
                                            {originAirportName}
                                        </p>
                                    </td>
                                )}

                            <td aria-hidden="true" className="px-3">
                                <div className="flex items-center">
                                    <div className="inline-block border-b-2 border-dashed w-6 h-1 -ml-5" />
                                    <div className="inline-block mx-auto w-4">
                                        <FaPlane className="inline-block" />
                                    </div>
                                    <div className="inline-block border-b-2 border-dashed w-6 h-1 -mr-5" />
                                </div>
                            </td>

                            {isPrivateSlotAndBookable(slot) && (slot.type !== SlotType.LANDING || !slot.destination)
                                ? (
                                    <td>
                                        <label htmlFor={`destination-${slot.id}`} className="sr-only">
                                            Destino
                                        </label>
                                        <InputField
                                            name="destination"
                                            id={`destination-${slot.id}`}
                                            type="text"
                                            placeholder="Destino"
                                            value={formValues[slot.id]?.destination || ""}
                                            onChange={(evt) => handleLineInputChange(slot.id, evt)} />
                                    </td>
                                )
                                : (
                                    <td className="text-center px-3">
                                        <span className="font-header font-bold text-[18px] leading-6">{slot.destination || "ZZZZ"}</span>
                                        <p
                                            className="w-32 mx-auto font-action font-normal text-xs leading-3 text-center truncate"
                                            title={destinationAirportName}
                                        >
                                            {destinationAirportName}
                                        </p>
                                    </td>
                                )}

                            <td className="px-3">{slot.slotTime}{slot.slotTime.endsWith("Z") ? "" : "Z"}</td>
                            <td className="px-3">{slot.gate}</td>
                            <td className="rounded-r-lg px-3">
                                <div className="w-24 mx-auto">
                                    {slot.owner
                                        ? <SlotBookButton content={slot.owner.vid} canBookFLight={false} />
                                        : <SlotBookButton content="Reservar voo" onClick={() => handleSlotScheduling(slot.id)} />}
                                </div>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
            {hasMoreFlights && (
                <tfoot>
                    <tr>
                        <td colSpan={100}>
                            <div className="w-screen md:w-full flex justify-center my-8">
                                {isFecthingMoreFlights
                                    ? (
                                        <div className="relative">
                                            <LoadingIndicator />
                                        </div>
                                    )
                                    : (
                                        <ActionButton
                                            content="Carregar mais voos"
                                            backgroundFilled={false}
                                            onClick={() => onMoreFlightsRequested && onMoreFlightsRequested()}
                                        />
                                    )}
                            </div>
                        </td>
                    </tr>
                </tfoot>
            )}
        </table>
    )
}