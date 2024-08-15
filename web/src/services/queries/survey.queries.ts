import { queries } from '@/lib/query-keys';
import { useQuery } from '@tanstack/react-query';
import { getSurveyResult } from '../apis/survey.service';

export const useSurveyResult = (surveyId: string, questionId: string) => {
  const surveyResult = useQuery({
    queryKey: queries.survey.result(surveyId, questionId),
    queryFn: ({ queryKey }) => getSurveyResult(queryKey[1], queryKey[2]),
  });

  return { surveyResult };
};
