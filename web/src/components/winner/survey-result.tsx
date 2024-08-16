import { useSurveyResult } from '@/services/queries/survey.queries';
import { SurveyDataType } from '@/types/survey';
import { useParams } from 'react-router-dom';
import { SurveyResultWrapper } from './survey-result.styles';

export const SurveyResult = ({ survey }: { survey: SurveyDataType }) => {
  const params = useParams();

  const eventId = params.id || '';

  const { surveyResult } = useSurveyResult(eventId, '1', 1);

  return (
    <SurveyResultWrapper>
      <span>전체 응답수 {}</span>
    </SurveyResultWrapper>
  );
};
