import {FunctionComponent} from "react";
import {Header, Subheader} from "components/typography/Typography";
import {SlotTypeOptions} from "types/SlotFilter";
import {FilterCard} from "./FilterCard";
import {getEventTypeName} from "types/Event";
import {Translations} from "types/Translations";
import {FaPlaneArrival, FaPlaneDeparture, FaUserClock} from "react-icons/fa";
import {useText} from "hooks/useText";

interface SlotsQtdData {
  departure?: number;
  landing?: number;
  departureLanding?: number;
  privateDeparture?: number;
  privateLanding?: number;
}

interface SlotTypeFilterProps {
  eventName: string;
  eventType: string;
  eventBanner?: string;
  slotsQtdData?: SlotsQtdData;
  selectedSlotType?: SlotTypeOptions | null;
  onSlotTypeChange: (newType: SlotTypeOptions) => void;
}

export const SlotTypeFilter: FunctionComponent<SlotTypeFilterProps> = ({
   eventName,
   eventType,
   eventBanner,
   slotsQtdData,
   selectedSlotType,
   onSlotTypeChange
 }) => {
  const {t} = useText();

  return (
    <nav className="relative bg-white dark:bg-black">
      <div
        className="hidden dark:lg:block absolute rounded-md w-full h-48 opacity-10"
      >
        <img src={eventBanner}
             alt={`${eventName} logo`}
             width={288}
             height={285}/>
      </div>

      <div
        className="relative z-20 h-full flex flex-row md:flex-col justify-between md:justify-start items-center flex-wrap gap-8 px-6 pt-9">
        <div className="self-start">
          <Header textSize="text-lg" textColor="text-blue dark:text-white">{eventName}</Header>
          <Subheader textSize="text-md"
                     textColor="text-light-blue dark:text-white">{getEventTypeName(eventType)}</Subheader>
        </div>
        {slotsQtdData?.landing! > 0 && (
          <FilterCard
            title={t('flights.arrivals' as unknown as keyof Translations)}
            icon={<FaPlaneArrival/>}
            quantity={slotsQtdData?.landing}
            onClick={() => onSlotTypeChange(SlotTypeOptions.LANDING)}
            active={selectedSlotType === SlotTypeOptions.LANDING}/>
        )}

        {slotsQtdData?.departure! > 0 && (
          <FilterCard
            title={t('flights.departures' as unknown as keyof Translations)}
            icon={<FaPlaneDeparture/>}
            quantity={slotsQtdData?.departure}
            onClick={() => onSlotTypeChange(SlotTypeOptions.TAKEOFF)}
            active={selectedSlotType === SlotTypeOptions.TAKEOFF}/>
        )}

        {slotsQtdData?.departureLanding! > 0 && (
          <FilterCard
            title={t('flights.departureArrival' as unknown as keyof Translations)}
            icon={<FaUserClock/>}
            quantity={slotsQtdData?.departureLanding}
            onClick={() => onSlotTypeChange(SlotTypeOptions.TAKEOFF_LANDING)}
            active={selectedSlotType === SlotTypeOptions.TAKEOFF_LANDING}/>
        )}

        {(slotsQtdData?.privateDeparture! > 0 || slotsQtdData?.privateLanding! > 0) && (
          <FilterCard
            title={t('flights.private' as unknown as keyof Translations)}
            icon={<FaUserClock/>}
            quantity={slotsQtdData?.privateDeparture! + slotsQtdData?.privateLanding!}
            onClick={() => onSlotTypeChange(SlotTypeOptions.PRIVATE)}
            active={selectedSlotType === SlotTypeOptions.PRIVATE}/>
        )}
      </div>
    </nav>
  );
}
