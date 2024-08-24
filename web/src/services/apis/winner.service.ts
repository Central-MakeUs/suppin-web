import { WinnerPayload } from '@/types/winner';
import { axiosInstance } from '../axios-instance';

export const draftWinners = async (payload: WinnerPayload) => {
  const { data } = await axiosInstance.post('/survey/draft', payload);
  return data;
};
