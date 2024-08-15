import step3 from '@/assets/step3.png';
import { useCreateSurvey } from '@/services/queries/survey.mutation';
import { RootState } from '@/store';
import { QuestionType } from '@/types/survey';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Box } from '../common/box';
import { Button } from '../common/button';
import { SpinLoader } from '../common/loader';
import { PreviewButton } from '../common/preview-button';
import { Subtitle } from '../common/Subtitle';
import { Choice } from './choice';
import {
  CreateSurveyPageContainer,
  CreateSurveyPageContent,
  CreateSurveyPageHeader,
} from './create-survey-page3.styles';
import { QuestionSelect } from './question-select';
import { Subjective } from './subjective';

export const CreateSurveyPageStep3 = () => {
  const router = useNavigate();

  const { createSurveyMutation, isCreateSurveyLoading } = useCreateSurvey();

  const { personalInfoOptionList, eventId } = useSelector(
    (state: RootState) => state.survey
  );

  const [questions, setQuestions] = useState<
    {
      id: string;
      type: QuestionType;
      text: string;
      options: string[];
    }[]
  >([
    {
      id: uuidv4(),
      type: 'SUBJECTIVE' as QuestionType,
      text: '',
      options: [] as string[],
    },
  ]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { id: uuidv4(), type: 'SUBJECTIVE', text: '', options: [] },
    ]);
  };

  const changeQuestionType = (
    id: string,
    type: 'SUBJECTIVE' | 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE'
  ) => {
    setQuestions(
      questions.map(q => (q.id === id ? { ...q, type, options: [] } : q))
    );
  };

  const updateQuestionText = (id: string, text: string) => {
    setQuestions(questions.map(q => (q.id === id ? { ...q, text } : q)));
  };

  const updateQuestionOptions = (id: string, options: string[]) => {
    setQuestions(questions.map(q => (q.id === id ? { ...q, options } : q)));
  };

  const handleSubmit = () => {
    const formattedData = {
      eventId,
      personalInfoOptionList: personalInfoOptionList.map(option => ({
        ...option,
      })),
      questionList: questions.map(question => ({
        questionType: question.type,
        questionText: question.text,
        options: question.options,
      })),
    };

    createSurveyMutation(formattedData);
  };

  return (
    <CreateSurveyPageContainer>
      <Subtitle title="설문 생성하기" onBackClick={() => router('/')} />
      <CreateSurveyPageHeader>
        <div className="progress">
          <img src={step3} style={{ width: '68px' }} alt="Step 3" />
          <PreviewButton />
        </div>
        <h1 className="header">
          당첨자 선정을 위해 필요한
          <br />
          질문을 입력해주세요
        </h1>
      </CreateSurveyPageHeader>
      <CreateSurveyPageContent>
        {questions.map(question => (
          <Box className="box" key={question.id}>
            <QuestionSelect
              value={question.type}
              onChange={newType => changeQuestionType(question.id, newType)}
            />
            {question.type === 'SUBJECTIVE' && (
              <Subjective
                value={question.text}
                onChange={text => updateQuestionText(question.id, text)}
              />
            )}
            {question.type !== 'SUBJECTIVE' && (
              <Choice
                type={question.type}
                value={question.text}
                onChange={text => updateQuestionText(question.id, text)}
                options={question.options!}
                onOptionsChange={options =>
                  updateQuestionOptions(question.id, options)
                }
              />
            )}
          </Box>
        ))}
        <div className="btns">
          <Button variant="add" className="add" onClick={addQuestion}>
            + 질문 추가하기
          </Button>
          <Button
            disabled={isCreateSurveyLoading}
            variant="add"
            className="submit"
            onClick={handleSubmit}
          >
            {isCreateSurveyLoading ? <SpinLoader /> : '설문 생성 완료'}
          </Button>
        </div>
      </CreateSurveyPageContent>
    </CreateSurveyPageContainer>
  );
};
