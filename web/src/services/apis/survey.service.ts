import { SurveyPayload, SurveyResponse } from '@/types/survey';
import { axiosInstance } from '../axios-instance';

/** 설문 생성 api */
export const createSurvey = async (payload: SurveyPayload) => {
  const { data } = await axiosInstance.post('/survey/create', payload);
  return data;
};

/** 설문 결과 조회 api */
export const getSurveyResult = async (
  surveyId: number,
  questionId: number,
  page: number,
  size: number
) => {
  const { data } = await axiosInstance.get(
    `/survey/${surveyId}/answers/${questionId}?page=${page}&size=${size}`
  );
  return data;
};

/** 설문 조회 api */
export const getSurvey = async (surveyId: string): Promise<SurveyResponse> => {
  const { data } = await axiosInstance.get(`/survey/view?surveyId=${surveyId}`);
  return data;
};
