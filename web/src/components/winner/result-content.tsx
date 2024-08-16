import { useGetSurvey } from '@/services/queries/survey.queries';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BarLoader } from '../common/loader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../common/tabs';
import { SurveyResult } from './survey-result';

export const ResultContent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const surveyId = searchParams.get('surveyId');
  const type = searchParams.get('type');

  const { survey } = useGetSurvey(surveyId || '');

  useEffect(() => {
    if (!type && surveyId) {
      setSearchParams({
        surveyId,
        type: 'survey-result',
      });
    }
  }, []);

  let content;
  if (survey.isPending) {
    content = <BarLoader />;
  } else if (survey.isFetching) {
    content = <BarLoader />;
  } else if (survey.data) {
    content = <SurveyResult survey={survey.data} />;
  } else {
    content = null;
  }
  return (
    <Tabs value={type || 'survey-result'}>
      <TabsList>
        <TabsTrigger value="survey-result">설문 결과</TabsTrigger>
        <TabsTrigger value="winner">당첨자 선정</TabsTrigger>
      </TabsList>
      <TabsContent value="survey-result">{content}</TabsContent>
    </Tabs>
  );
};
