import { CreateEventPayload } from '@/types/event';
import { axiosInstance } from '../axios-instance';

export const createEvent = async (payload: CreateEventPayload) => {
  const { data } = await axiosInstance.post('/events/new/survey', payload);
  return data;
};

export const deleteEvent = async (eventId: string) => {
  const { data } = await axiosInstance.delete(`/events/${eventId}`);
  return data;
};
