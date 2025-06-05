import { AxiosError } from "axios";
import { IocContext } from "context/IocContext";
import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import { ApiErrorResponse } from "types/ApiBase";
import { Pagination } from "types/Pagination";
import { SlotScheduleData, Slot, SlotBookActions } from "types/Slot";

interface SlotBookMutationVariables {
    slotId: number;
    eventId: number;
    slotData?: SlotScheduleData;
}

export function useSlotBookMutation(action: SlotBookActions) {
    const { apiClient } = useContext(IocContext);
    const queryClient = useQueryClient();

    const bookingMutation = useMutation<any, AxiosError<ApiErrorResponse>, SlotBookMutationVariables>(({ slotId, slotData }) => {
        switch (action) {
            case SlotBookActions.BOOK:
                return apiClient.scheduleSlot(slotId, slotData);
            case SlotBookActions.CANCEL:
                return apiClient.cancelSchedule(slotId);
            case SlotBookActions.CONFIRM:
                return apiClient.confirmSchedule(slotId);
            default:
                return Promise.reject("Invalid slot action: " + String(action));
        }
    }, {
        onSuccess: async (_, { eventId, slotId }) => {
            await queryClient.resetQueries<Pagination<Slot>>(['slots', eventId], {
                refetchPage: (page) => {
                    return page.data.find(slot => slot.id === slotId) !== undefined;
                }
            });

            await queryClient.resetQueries(['eventUserSlots', eventId]);
        }
    });

    return bookingMutation;
}
