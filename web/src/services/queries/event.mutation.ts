import { CreateEventPayload } from '@/types/event';
import { useMutation } from '@tanstack/react-query';
import { createEvent } from '../apis/event.service';

export const useCreateEvent = () => {
  const { mutateAsync: createEventMutation, isPending: isCreateEventLoading } =
    useMutation({
      mutationFn: async (payload: CreateEventPayload) =>
        await createEvent(payload),
    });

  return { createEventMutation, isCreateEventLoading };
};
