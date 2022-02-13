import { AxiosError } from "axios";
import { IocContext } from "context/IocContext";
import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Pagination } from "types/Pagination";
import { PrivateSlotScheduleData, Slot } from "types/Slot";

interface SlotBookMutationVariables {
    slotId: number;
    eventId: number;
    privateSlotData?: PrivateSlotScheduleData;
}

export function useSlotBookMutation() {
	const { apiClient } = useContext(IocContext);
    const queryClient = useQueryClient();

    const bookingMutation = useMutation<any, AxiosError, SlotBookMutationVariables>(({ slotId, privateSlotData }) => {
        return apiClient.bookSlot(slotId, privateSlotData);
    }, {
        onSuccess: async (_, { eventId, slotId }) => {
            await queryClient.refetchQueries<Pagination<Slot>>(['slots', eventId], {
                refetchPage: (page) => {
                    return page.data.find(slot => slot.id === slotId) !== undefined;
                }
            });

            await queryClient.refetchQueries(['userSlots']);
        }
    });

    return bookingMutation;
}
