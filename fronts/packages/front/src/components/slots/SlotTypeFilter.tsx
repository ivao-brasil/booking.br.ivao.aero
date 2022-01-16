import { FunctionComponent } from "react";
import { Header, Subheader } from "components/typography/Typography";
import { SlotTypeOptions } from "types/SlotFilter";
import { FilterCard } from "./FilterCard";

interface SlotsQtdData {
    takeoff: number;
    landing: number;
    private: number;
}

interface SlotTypeFilterProps {
    eventName: string;
    eventType: string;
    slotsQtdData: SlotsQtdData;
    selectedSlotType?: SlotTypeOptions;
    onSlotTypeChange: (newType: SlotTypeOptions) => void;
}

export const SlotTypeFilter: FunctionComponent<SlotTypeFilterProps> = (
    {
        eventName, eventType, selectedSlotType = SlotTypeOptions.LANDING,
        slotsQtdData, onSlotTypeChange
    }
) => {
    return (
        <nav className="bg-white dark:bg-black w-72 h-full">
            <div className="pl-6 pt-9">
                <Header textSize="text-lg" textColor="text-blue dark:text-white">{eventName}</Header>
                <Subheader textSize="text-md" textColor="text-light-blue dark:text-white">{eventType}</Subheader>
            </div>

            <div className="mt-12 mx-auto w-60">
                <FilterCard
                    slotType={SlotTypeOptions.LANDING}
                    text="Voos partindo do Aeroporto Internacional de Guarulhos"
                    quantity={2}
                    onClick={() => onSlotTypeChange(SlotTypeOptions.LANDING)}
                    active={selectedSlotType === SlotTypeOptions.LANDING} />

                <FilterCard
                    slotType={SlotTypeOptions.TAKEOFF}
                    text="Voos partindo do Aeroporto Internacional de Guarulhos"
                    quantity={157}
                    onClick={() => onSlotTypeChange(SlotTypeOptions.TAKEOFF)}
                    active={selectedSlotType === SlotTypeOptions.TAKEOFF} />

                <FilterCard
                    slotType={SlotTypeOptions.PRIVATE}
                    text="Voos partindo do Aeroporto Internacional de Guarulhos"
                    quantity={0}
                    onClick={() => onSlotTypeChange(SlotTypeOptions.PRIVATE)}
                    active={selectedSlotType === SlotTypeOptions.PRIVATE} />
            </div>
        </nav>
    );
}
