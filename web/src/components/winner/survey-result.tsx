import { useSurveyResult } from '@/services/queries/survey.queries';
import {
  AnswerDataType,
  AnswerResponse,
  QuestionType,
  SurveyDataType,
} from '@/types/survey';
import { InfiniteData, UseInfiniteQueryResult } from '@tanstack/react-query';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../common/select';
import { SurveyQuestionItem } from './survey-question-item';
import { SurveyResultWrapper } from './survey-result.styles';

export type QuestionLocal = {
  questionId: number;
  questionType: QuestionType;
  questionText: string;
  options: [string];
};

const SurveyContent = ({
  surveyResult,
}: {
  surveyResult: UseInfiniteQueryResult<InfiniteData<AnswerResponse>, Error>;
}) => {
  const { ref, inView } = useInView({
    threshold: 1.0,
  });

  useEffect(() => {
    if (inView) {
      surveyResult.fetchNextPage();
    }
  }, [inView, surveyResult.fetchNextPage]);

  return (
    <>
      {surveyResult.data?.pages.map((page, pageIndex) => {
        const { answers } = page.data as AnswerDataType;
        return answers.map((answer, index) => (
          <SurveyQuestionItem key={`${pageIndex}-${index}`} answer={answer} />
        ));
      })}
      <div ref={ref} style={{ height: '1px' }} />
    </>
  );
};

export const SurveyResult = ({ survey }: { survey: SurveyDataType }) => {
  const questions = survey.questions;
  const [selectedQuestion, setSelectedQuestion] = useState<QuestionLocal>(
    questions[0]
  );

  const surveyResult = useSurveyResult(
    survey.surveyId,
    selectedQuestion.questionId
  );

  const handleSelectChange = useCallback((value: QuestionLocal) => {
    setSelectedQuestion(value);
  }, []);

  const content = useMemo(
    () => <SurveyContent surveyResult={surveyResult} />,
    [surveyResult]
  );

  return (
    <SurveyResultWrapper>
      <span>
        전체 응답수 {surveyResult.data?.pages[0]?.data?.totalElements || 0}
      </span>
      <div className="date">
        <span>이벤트 기간</span>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>시작: {survey.startDate.replace('T', ' ')}</span>
          <span>종료: {survey.endDate.replace('T', ' ')}</span>
        </div>
      </div>
      {/* @ts-expect-error no type */}
      <Select onValueChange={handleSelectChange} value={selectedQuestion}>
        <SelectTrigger className="select-trigger">
          <SelectValue placeholder={questions[0].questionText} />
        </SelectTrigger>
        <SelectContent style={{ background: '#fff' }}>
          <SelectGroup>
            {questions.map(question => (
              <SelectItem
                className="select-item"
                key={question.questionId}
                // @ts-expect-error no type
                value={question}
              >
                {question.questionText}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <div>{content}</div>
    </SurveyResultWrapper>
  );
};
