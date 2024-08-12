import { setEventId } from '@/store/survey';
import { CreateEventPayload } from '@/types/event';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createEvent } from '../apis/event.service';

export const useCreateEvent = () => {
  const router = useNavigate();
  const dispatch = useDispatch();

  const {
    mutateAsync: createEventMutation,
    isPending: isCreateEventLoading,
    isSuccess: isCreateEventSuccess,
  } = useMutation({
    mutationFn: async (payload: CreateEventPayload) =>
      await createEvent(payload),

    onSuccess: (data: { eventId: number }) => {
      dispatch(setEventId(data.eventId));
      router('/survey/new?step=2');
    },
  });

  return { createEventMutation, isCreateEventLoading, isCreateEventSuccess };
};
