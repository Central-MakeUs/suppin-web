import { SurveyPayload } from '@/types/survey';
import { axiosInstance } from '../axios-instance';

/** 설문 생성 api */
export const createSurvey = async (payload: SurveyPayload) => {
  const { data } = await axiosInstance.post('/survey/create', payload);
  return data;
};
