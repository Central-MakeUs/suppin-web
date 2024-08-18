import { queries } from '@/lib/query-keys';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getSurvey, getSurveyResult } from '../apis/survey.service';

export const useSurveyResult = (
  surveyId: number,
  questionId: number,
  page: number = 1
) => {
  const surveyResult = useInfiniteQuery({
    queryKey: queries.survey.result(surveyId, questionId, page),
    queryFn: ({ queryKey }) =>
      getSurveyResult(
        queryKey[1] as number,
        queryKey[2] as number,
        queryKey[3] as number,
        10
      ),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }

      return lastPageParam + 1;
    },
    getPreviousPageParam: (_firstPage, _allPages, firstPageParam) => {
      if (firstPageParam <= 1) {
        return undefined;
      }

      return firstPageParam - 1;
    },
    enabled: !!surveyId,
  });

  return { surveyResult };
};

export const useGetSurvey = (surveyId: string) => {
  const survey = useQuery({
    queryKey: queries.survey.detail(surveyId),
    queryFn: ({ queryKey }) => getSurvey(queryKey[1]),
    enabled: surveyId !== '',
    select: data => data.data,
  });

  return {
    survey,
  };
};
