import { useState } from "react";
import { SlotTypeFilter } from "components/slots/SlotTypeFilter";
import { SlotsTable } from "components/slots/SlotsTable";
import { SlotPageHeader } from "components/slots/SlotPageHeader";
import { SlotTypeOptions } from "types/SlotFilter";

export default function SlotsPage() {
    const [selectedSlotType, setSelectedSlotType] = useState(SlotTypeOptions.LANDING);

    return (
        <div className="flex h-full">
            <SlotTypeFilter
                eventName="Teste"
                eventType="a"
                slotsQtdData={{ takeoff: 1, landing: 1, private: 2 }}
                selectedSlotType={selectedSlotType}
                onSlotTypeChange={(selectedType) => setSelectedSlotType(selectedType)} />


            <div className="flex-auto flex flex-col">
                <SlotPageHeader />
                <div className="mt-3 w-full h-full bg-[#F7F7F7] dark:bg-dark-gray-2">
                    <div className="p-8">
                        <SlotsTable />
                    </div>
                </div>
            </div>
        </div>
    );
}