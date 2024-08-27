import { setEvent } from '@/store/survey';
import { CreateEventPayload } from '@/types/event';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { createEvent, deleteEvent } from '../apis/event.service';

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

    onSuccess: (data: { data: { eventId: number } }) => {
      dispatch(setEvent({ id: data.data.eventId }));
      router('/survey/new?step=2');
    },
  });

  return { createEventMutation, isCreateEventLoading, isCreateEventSuccess };
};

export const useDeleteEvent = () => {
  const router = useNavigate();

  const { mutate: deleteEventMutation } = useMutation({
    mutationFn: (eventId: string) => deleteEvent(eventId),
    onSuccess: () => {
      toast.error('설문이 존재하지 않는 이벤트입니다');
      router('/');
    },
  });

  return {
    deleteEventMutation,
  };
};
