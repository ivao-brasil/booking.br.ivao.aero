import { FunctionComponent } from "react";
import { Header, Subheader } from "components/typography/Typography";
import { SlotTypeOptions } from "types/SlotFilter";
import { FilterCard } from "./FilterCard";
import { getEventTypeName } from "types/Event";

interface SlotsQtdData {
    takeoff: number;
    landing: number;
    private: number;
}

interface SlotTypeFilterProps {
    eventName: string;
    eventType: string;
    slotsQtdData?: SlotsQtdData;
    selectedSlotType?: SlotTypeOptions | null;
    onSlotTypeChange: (newType: SlotTypeOptions) => void;
}

export const SlotTypeFilter: FunctionComponent<SlotTypeFilterProps> = ({
    eventName, eventType,
    slotsQtdData, selectedSlotType, onSlotTypeChange
}) => {
    return (
        <nav className="flex flex-row md:flex-col justify-between md:justify-start items-center flex-wrap gap-8 px-6 pt-9 h-full bg-white dark:bg-black">
            <div>
                <Header textSize="text-lg" textColor="text-blue dark:text-white">{eventName}</Header>
                <Subheader textSize="text-md" textColor="text-light-blue dark:text-white">{getEventTypeName(eventType)}</Subheader>
            </div>
            <FilterCard
                slotType={SlotTypeOptions.LANDING}
                quantity={slotsQtdData?.landing}
                onClick={() => onSlotTypeChange(SlotTypeOptions.LANDING)}
                active={selectedSlotType === SlotTypeOptions.LANDING} />

            <FilterCard
                slotType={SlotTypeOptions.TAKEOFF}
                quantity={slotsQtdData?.takeoff}
                onClick={() => onSlotTypeChange(SlotTypeOptions.TAKEOFF)}
                active={selectedSlotType === SlotTypeOptions.TAKEOFF} />

            <FilterCard
                slotType={SlotTypeOptions.PRIVATE}
                quantity={slotsQtdData?.private}
                onClick={() => onSlotTypeChange(SlotTypeOptions.PRIVATE)}
                active={selectedSlotType === SlotTypeOptions.PRIVATE} />
        </nav>
    );
}
