import { AxiosError } from "axios";
import { IocContext } from "context/IocContext";
import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import { PrivateSlotScheduleData } from "types/Slot";

interface SlotBookMutationVariables {
    slotId: number;
    eventId: number;
    privateSlotData?: PrivateSlotScheduleData;
}

export function useSlotBookMutation() {
	const { apiClient } = useContext(IocContext);
    const queryClient = useQueryClient()

    const bookingMutation = useMutation<any, AxiosError, SlotBookMutationVariables>(({ slotId, privateSlotData }) => {
        return apiClient.bookSlot(slotId, privateSlotData);
    }, {
        onSuccess: (_, { eventId }) => {
            queryClient.invalidateQueries(['slots', eventId]);
        }
    });

    return bookingMutation;
}
