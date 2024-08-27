import step3 from '@/assets/step3.png';
import { Choice } from '@/components/Survey/choice';
import {
  CreateSurveyPageContainer,
  CreateSurveyPageContent,
  CreateSurveyPageHeader,
} from '@/components/Survey/create-survey-page3.styles';
import { QuestionSelect } from '@/components/Survey/question-select';
import { Subjective } from '@/components/Survey/subjective';
import { useCreateSurvey } from '@/services/queries/survey.mutation';
import { RootState } from '@/store';
import { QuestionType } from '@/types/survey';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';
import { Box } from '../common/box';
import { Button } from '../common/button';
import { SpinLoader } from '../common/loader';
import { PreviewButton } from '../common/preview-button';
import { Subtitle } from '../common/Subtitle';
import { CompleteSurveyMoadl } from './complete-survey-modal';

export const CreateSurveyPageStep3 = () => {
  const router = useNavigate();

  const { createSurveyMutation, isError, isCreateSurveyLoading } =
    useCreateSurvey();

  const { personalInfoOptionList, event, policy } = useSelector(
    (state: RootState) => state.survey
  );

  const [link, setLink] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
    if (questions.length === 10) {
      toast.error('질문은 최대 10개입니다.');
      return;
    }
    setQuestions([
      ...questions,
      { id: uuidv4(), type: 'SUBJECTIVE', text: '', options: [] },
    ]);
  };

  const deleteQuestion = (id: string) => {
    setQuestions(questions.filter(q => q.id !== id));
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

  const handleSubmit = async () => {
    if (questions.filter(q => q.text.trim().length === 0).length > 0) {
      toast.error('질문을 입력해주세요.');
      return;
    }

    if (
      questions.map(q =>
        q.type !== 'SUBJECTIVE'
          ? q.options.filter(c => c.trim().length === 0).length
          : null
      )[1] !== 0
    ) {
      toast.error('객관식 항목은 빈 값일 수 없습니다.');
      return;
    }

    const formattedData = {
      eventId: event.id,
      consentFormHtml: policy,
      personalInfoOptionList: personalInfoOptionList.map(option => ({
        ...option,
      })),
      questionList: questions.map(question => ({
        questionType: question.type,
        questionText: question.text,
        options: question.options,
      })),
    };

    const data = await createSurveyMutation(formattedData);

    if (isError) {
      return;
    }
    setIsOpen(true);
    setLink(data.uuid);
    sessionStorage.removeItem('question');
    sessionStorage.removeItem('policy');
    sessionStorage.removeItem('personal');
    sessionStorage.removeItem('event');
  };

  const previewHandler = () => {
    sessionStorage.setItem('question', JSON.stringify(questions));
  };

  return (
    <>
      <CreateSurveyPageContainer>
        <Subtitle title="설문 생성하기" onBackClick={() => router('/')} />
        <CreateSurveyPageHeader>
          <div className="progress">
            <img src={step3} style={{ width: '68px' }} alt="Step 3" />
            <PreviewButton onClick={previewHandler} />
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
                onDelete={() => deleteQuestion(question.id)}
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
              onClick={() => {
                handleSubmit();
              }}
            >
              {isCreateSurveyLoading ? <SpinLoader /> : '설문 생성 완료'}
            </Button>
          </div>
        </CreateSurveyPageContent>
      </CreateSurveyPageContainer>
      {isOpen && (
        <CompleteSurveyMoadl
          uuid={link}
          open={isOpen}
          onOpenChange={setIsOpen}
        />
      )}
    </>
  );
};
