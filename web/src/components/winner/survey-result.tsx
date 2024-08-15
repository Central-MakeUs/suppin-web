import { useSurveyResult } from '@/services/queries/survey.queries';
import { useParams } from 'react-router-dom';
import { SurveyResultWrapper } from './survey-result.styles';

export const SurveyResult = () => {
  const params = useParams();

  const { surveyResult } = useSurveyResult(params as unknown as string, '1');

  return (
    <SurveyResultWrapper>
      <span>전체 응답수 {}</span>
    </SurveyResultWrapper>
  );
};
