import backArrow from '@/assets/btn_back_black.png';
import { useDeleteEvent } from '@/services/queries/event.mutation';
import { useGetSurvey } from '@/services/queries/survey.queries';
import { useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { BarLoader } from '../common/loader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../common/tabs';
import { ResultContentWrapper } from './result-content.styles';
import { SurveyResult } from './survey-result';
import { SurveyWinner } from './survey-winner';

export const ResultContent = () => {
  const router = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const surveyId = searchParams.get('survey');
  const type = searchParams.get('type');
  const params = useParams();

  const { deleteEventMutation } = useDeleteEvent();
  const survey = useGetSurvey(surveyId || '');

  useEffect(() => {
    if (!type && surveyId) {
      setSearchParams(
        {
          survey: surveyId,
          type: 'survey-result',
        },
        { replace: true }
      );
    }
    if (surveyId === 'null') {
      deleteEventMutation(params.id!);
    }
  }, [surveyId]);

  let content;
  if (survey.isPending) {
    content = <BarLoader />;
  } else if (survey.isFetching && !survey.isPending) {
    content = (
      <>
        {survey.data &&
          (type === 'survey-result' ? (
            <SurveyResult survey={survey.data} />
          ) : (
            <SurveyWinner
              questions={survey.data.questions}
              surveyId={surveyId || ''}
            />
          ))}
        <BarLoader />
      </>
    );
  } else if (survey.data) {
    content =
      type === 'survey-result' ? (
        <SurveyResult survey={survey.data} />
      ) : (
        <SurveyWinner
          questions={survey.data.questions}
          surveyId={surveyId || ''}
        />
      );
  } else {
    content = null;
  }

  return (
    <ResultContentWrapper>
      <header className="header">
        <img src={backArrow} alt="back" onClick={() => router('..')} />
        {survey.data?.eventTitle}
      </header>
      <Tabs
        value={type || 'survey-result'}
        onValueChange={e => {
          setSearchParams({
            survey: surveyId!,
            type: e,
          });
        }}
      >
        <TabsList>
          <TabsTrigger value="survey-result">설문 결과</TabsTrigger>
          <TabsTrigger value="winner">당첨자 선정</TabsTrigger>
        </TabsList>
        <TabsContent value={type || 'survey-result'}>{content}</TabsContent>
      </Tabs>
    </ResultContentWrapper>
  );
};
