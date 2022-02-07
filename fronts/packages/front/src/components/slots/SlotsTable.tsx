import { ChangeEvent, FunctionComponent, useState } from "react";
import { FaPlane } from "react-icons/fa";
import { SlotBookButton } from "./SlotBookButton";
import { PrivateSlotScheduleData, Slot } from "types/Slot";
import { InputField } from "components/InputField";

interface SlotsTableProps {
    slots: Slot[];
    onSlotBook: (slotId: number, slotData?: PrivateSlotScheduleData) => void;
}

interface FormValueMap {
    [key: number]: {
        "flightNumber": string;
        "aircraftType": string;
        "origin": string;
        "destination": string;
    } | undefined;
}

export const SlotsTable: FunctionComponent<SlotsTableProps> = ({ slots, onSlotBook }) => {
    const [formValues, setFormValues] = useState<FormValueMap>({});

    const handleLineInputChange = (slotId: number, evt: ChangeEvent<HTMLInputElement>) => {
        setFormValues(prevState => {
            if (prevState === undefined) {
                prevState = {};
            }

            return {
                ...prevState,
                [slotId]: {
                    ...prevState[slotId],
                    [evt.target.name]: evt.target.value
                }
            } as FormValueMap;
        });
    }

    const handleSlotScheduling = (slotId: number) => {
        onSlotBook(slotId, formValues[slotId]);
    }

    return (
        <table className="border-separate text-center min-w-full" style={{ borderSpacing: "0 16px" }}>
            <thead>
                <tr className="text-[12px] text-[#A0A0A0] dark:text-light-gray-5 text-center font-semibold leading-7 font-header text-sm whitespace-nowrap">
                    <th aria-label="Logo da companhia" className="invisible w-24"></th>
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
                {slots.map((slot) => (
                    <tr key={slot.id} className="pt-4 bg-white dark:bg-black shadow-md text-blue dark:text-white font-header font-semibold text-sm whitespace-nowrap">
                        <td className="p-0 rounded-l-lg bg-transparent">
                            <img className="rounded-l-lg max-w-[96px]" width={96} height={60} src="https://via.placeholder.com/96x60" alt="Logo companhia GLO" />
                        </td>

                        {slot.private
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

                        {slot.private
                            ? (
                                <td>
                                    <label htmlFor={`aircraftType-${slot.id}`} className="sr-only">
                                        Tipo de aeronave
                                    </label>
                                    <InputField
                                        name="aircraftType"
                                        id={`aircraftType-${slot.id}`}
                                        type="text"
                                        placeholder="Tipo de aeronave"
                                        value={formValues[slot.id]?.aircraftType || ""}
                                        onChange={(evt) => handleLineInputChange(slot.id, evt)} />
                                </td>
                            )
                            : (
                                <td className="px-3">
                                    {slot.aircraft}
                                </td>
                            )}

                        {slot.private
                            ? (
                                <td>
                                    <label htmlFor={`origin-${slot.id}`} className="sr-only">
                                        Tipo de aeronave
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
                                    <p className="font-action font-normal text-xs leading-3">TANCREDO NEVES INTL</p>
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

                        {slot.private
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
                                    <p className="font-action font-normal text-xs leading-3">TANCREDO NEVES INTL</p>
                                </td>
                            )}

                        <td className="px-3">{slot.slotTime}</td>
                        <td className="px-3">{slot.gate}</td>
                        <td className="rounded-r-lg px-3">
                            <div className="w-24 mx-auto">
                                {slot.owner
                                    ? <SlotBookButton content={slot.owner.vid} canBookFLight={false} />
                                    : <SlotBookButton content="Reservar voo" onClick={() => handleSlotScheduling(slot.id)} />}
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}