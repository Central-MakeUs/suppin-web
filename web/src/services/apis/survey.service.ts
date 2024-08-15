import { SurveyPayload } from '@/types/survey';
import { axiosInstance } from '../axios-instance';

/** 설문 생성 api */
export const createSurvey = async (payload: SurveyPayload) => {
  const { data } = await axiosInstance.post('/survey/create', payload);
  return data;
};

/** 설문 결과 조회 api */
export const getSurveyResult = async (surveyId: string, questionId: string) => {
  const { data } = await axiosInstance.get(
    `/survey/${surveyId}/answers/${questionId}`
  );
  return data;
};
