import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import { AxiosError } from "axios";
import { IocContext } from "context/IocContext";

interface SlotBookMutationVariables {
    slotId: number;
    eventId: number;
}

export function useSlotBookMutation() {
	const { apiClient } = useContext(IocContext);
    const queryClient = useQueryClient()

    const bookingMutation = useMutation<any, AxiosError, SlotBookMutationVariables>(({ slotId }) => {
        return apiClient.bookSlot(slotId);
    }, {
        onSuccess: (_, { eventId }) => {
            queryClient.invalidateQueries(['slots', eventId]);
        }
    });

    return bookingMutation;
}
