import {ChangeEvent, FunctionComponent, useEffect, useState} from "react";
import {FaPlane} from "react-icons/fa";
import {SlotBookButton} from "./SlotBookButton";
import {getSlotAirline, Slot, SlotScheduleData, SlotType} from "types/Slot";
import {InputField} from "components/InputField";
import {ActionButton} from "components/button/Button";
import {LoadingIndicator} from "components/LoadingIndicator/LoadingIndicator";
import {AirportDetails} from "types/AirportDetails";
import {useText} from "hooks/useText";

interface SlotsTableProps {
  slots: Slot[];
  airlineImages?: Array<Blob | null>;
  hasMoreFlights?: boolean;
  isFecthingMoreFlights?: boolean;
  airportDetailsMap?: Record<string, AirportDetails>;
  onSlotBook: (slotId: number, slotData?: SlotScheduleData) => void;
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
                                                                 slots,
                                                                 airlineImages,
                                                                 airportDetailsMap,
                                                                 hasMoreFlights,
                                                                 isFecthingMoreFlights,
                                                                 onSlotBook,
                                                                 onMoreFlightsRequested
                                                               }) => {
  const {t} = useText();
  const [formValues, setFormValues] = useState<FormValueMap>({});

  const handleLineInputChange = (slotId: number, evt: ChangeEvent<HTMLInputElement>) => {
    updateFormValues(slotId, evt.target.name as keyof SlotScheduleData, evt.target.value);
  }

  const updateFormValues = (slotId: number, key: keyof SlotScheduleData, value: string) => {
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

  const isBookable = (slot: Slot) => !slot.owner;

  const getAirportFullName = (icao: string, detailsMap?: Record<string, AirportDetails>) => {
    if (!detailsMap) {
      return "";
    }

    const airportDetails = detailsMap[icao];

    if (!airportDetails) {
      return "";
    }

    let airportName = airportDetails.name;
    if (airportName.indexOf(" / ") !== -1) {
      const [, airportFullName] = airportName.split(" / ");
      airportName = airportFullName;
    }

    return airportName;
  };

  useEffect(() => {
    slots.forEach((slot) => {
      if (!isBookable(slot)) {
        return;
      }

      if (!slot.isFixedDestination) {
        updateFormValues(slot.id, "destination", slot.destination);
      }
      if (!slot.isFixedOrigin) {
        updateFormValues(slot.id, "origin", slot.origin);
      }
    });
  }, [slots]);

  return (
    <table className="border-separate text-center min-w-full" style={{borderSpacing: "0 16px"}}>
      <thead>
      <tr
        className="text-[12px] text-[#A0A0A0] dark:text-light-gray-5 text-center font-semibold leading-7 font-header text-sm whitespace-nowrap">
        <th aria-label="Logo da companhia" className="invisible min-w-[6rem] w-24"></th>
        <th className="px-3">{t('flights.flightNumber')}</th>
        <th className="px-3">{t('flights.filter.aircraft')}</th>
        <th className="px-3">{t('flights.filter.origin')}</th>
        <th className="invisible w-10"></th>
        <th className="px-3">{t('flights.filter.destination')}</th>
        <th className="px-3">EOBT/ETA</th>
        <th className="px-3">{t('flights.gate')}</th>
        <th className="invisible w-32"></th>
      </tr>
      </thead>
      <tbody>
      {slots.map((slot, idx) => {
        const originAirportName = getAirportFullName(slot.origin, airportDetailsMap);
        const destinationAirportName = getAirportFullName(slot.destination, airportDetailsMap);
        const hasAirlineImage = airlineImages && airlineImages[idx];

        return (
          <tr
            key={slot.id}
            className="h-13 pt-4 bg-white dark:bg-black shadow-md text-blue dark:text-white font-header font-semibold text-sm whitespace-nowrap"
          >
            <td className={`p-0 rounded-l-lg ${hasAirlineImage ? "bg-white" : ""}`}>
              {hasAirlineImage && (
                <img
                  className="mx-auto rounded-l-lg"
                  width={67}
                  height={16}
                  src={URL.createObjectURL(airlineImages[idx] as Blob)}
                  alt={`Logo ${getSlotAirline(slot)}`}
                />
              )}
            </td>

            {isBookable(slot) && !slot.flightNumber
              ? (
                <td>
                  <label htmlFor={`flightNumber-${slot.id}`} className="sr-only">
                    {t('flights.flightNumber')}
                  </label>
                  <InputField
                    name="flightNumber"
                    id={`flightNumber-${slot.id}`}
                    type="text"
                    placeholder={t("flights.flightNumber")}
                    value={formValues[slot.id]?.flightNumber || ""}
                    onChange={(evt) => handleLineInputChange(slot.id, evt)}/>
                </td>
              )
              : (
                <td className="font-action text-[17px] px-3">
                  {slot.flightNumber}
                </td>
              )}

            {isBookable(slot) && !slot.aircraft
              ? (
                <td>
                  <label htmlFor={`aircraft-${slot.id}`} className="sr-only">
                    {t('flights.filter.aircraft')}
                  </label>
                  <InputField
                    name="aircraft"
                    id={`aircraft-${slot.id}`}
                    type="text"
                    placeholder={t('flights.filter.aircraft')}
                    value={formValues[slot.id]?.aircraft || ""}
                    onChange={(evt) => handleLineInputChange(slot.id, evt)}/>
                </td>
              )
              : (
                <td className="px-3">
                  {slot.aircraft}
                </td>
              )}

            {isBookable(slot) && !slot.isFixedOrigin
              ? (
                <td>
                  <label htmlFor={`origin-${slot.id}`} className="sr-only">
                    {t('flights.filter.origin')}
                  </label>
                  <InputField
                    name="origin"
                    id={`origin-${slot.id}`}
                    type="text"
                    placeholder={t('flights.filter.origin')}
                    value={formValues[slot.id]?.origin || ""}
                    onChange={(evt) => handleLineInputChange(slot.id, evt)}/>
                </td>
              )
              : (
                <td className="text-center px-3" title={originAirportName}>
                  <span className="font-header font-bold text-[18px] leading-6">{slot.origin || "ZZZZ"}</span>
                  <p
                    className="w-32 mx-auto font-action font-normal text-xs leading-3 text-center truncate"
                  >
                    {originAirportName}
                  </p>
                </td>
              )}

            <td aria-hidden="true" className="px-3">
              <div className="flex items-center">
                <div className="inline-block border-b-2 border-dashed w-6 h-1 -ml-5"/>
                <div className="inline-block mx-auto w-4">
                  <FaPlane className="inline-block"/>
                </div>
                <div className="inline-block border-b-2 border-dashed w-6 h-1 -mr-5"/>
              </div>
            </td>

            {isBookable(slot) && !slot.isFixedDestination
              ? (
                <td>
                  <label htmlFor={`destination-${slot.id}`} className="sr-only">
                    {t('flights.filter.destination')}
                  </label>
                  <InputField
                    name="destination"
                    id={`destination-${slot.id}`}
                    type="text"
                    placeholder={t('flights.filter.destination')}
                    value={formValues[slot.id]?.destination || ""}
                    onChange={(evt) => handleLineInputChange(slot.id, evt)}/>
                </td>
              )
              : (
                <td className="text-center px-3" title={destinationAirportName}>
                  <span className="font-header font-bold text-[18px] leading-6">{slot.destination || "ZZZZ"}</span>
                  <p
                    className="w-32 mx-auto font-action font-normal text-xs leading-3 text-center truncate"
                  >
                    {destinationAirportName}
                  </p>
                </td>
              )}

            <td className="px-3">
              <span>{'ETA/EOBT'}:&nbsp;</span>
              <span>{slot.slotTime}</span>
            </td>
            <td className="px-3">{slot.gate}</td>
            <td className="rounded-r-lg px-3">
              <div className="w-24 mx-auto">
                {!isBookable(slot)
                  ? <SlotBookButton content={slot.owner!.vid} canBookFLight={false}/>
                  : <SlotBookButton content={t("flights.bookFlight")} onClick={() => handleSlotScheduling(slot.id)}/>}
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
                    <LoadingIndicator/>
                  </div>
                )
                : (
                  <ActionButton
                    content={t("flights.loadMore")}
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
