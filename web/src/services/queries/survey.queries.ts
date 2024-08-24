import { queries } from '@/lib/query-keys';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getSurvey, getSurveyResult } from '../apis/survey.service';

export const useSurveyResult = (surveyId: number, questionId: number) => {
  return useInfiniteQuery({
    queryKey: queries.survey.result(surveyId, questionId),
    queryFn: ({ queryKey, pageParam }) => {
      const [, surveyId, questionId] = queryKey;
      return getSurveyResult(
        surveyId as number,
        questionId as number,
        pageParam,
        5
      );
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      const { totalPages, answers } = lastPage.data;
      return lastPageParam < totalPages && answers.length > 5
        ? lastPageParam + 1
        : undefined;
    },
    getPreviousPageParam: (_firstPage, _allPages, firstPageParam) => {
      return firstPageParam > 1 ? firstPageParam - 1 : undefined;
    },
    enabled: Boolean(surveyId),
    staleTime: 1 * 60 * 1000,
  });
};

export const useGetSurvey = (surveyId: string) => {
  return useQuery({
    queryKey: queries.survey.detail(surveyId),
    queryFn: ({ queryKey }) => {
      const [, surveyId] = queryKey;
      return getSurvey(surveyId);
    },
    enabled: Boolean(surveyId),
    select: data => data.data,
    staleTime: 3 * 60 * 1000,
  });
};
