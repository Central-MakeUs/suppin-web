import { head1Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import { useState } from 'react';
import styled from 'styled-components';

import { Btn_popup } from '@/components/common/Btn_popup';
import { PreviewButton } from '@/components/common/preview-button';
import { Subtitle } from '@/components/common/Subtitle';
import ObjectiveMultipleForm from '@/components/survey/ObjectiveMultipleForm';
import ObjectiveSingleForm from '@/components/survey/ObjectiveSingleForm';
import SubjectiveForm from '@/components/survey/SubjectiveForm';
import SurveyForm from '@/components/survey/surveyForm';
import step3 from '../assets/step3.png';

const CreateSurveyPageStep3 = () => {
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [questions, setQuestions] = useState<
    { id: number; type: string; content: React.ReactNode }[]
  >([]);

  const [selectedOption, setSelectedOption] = useState('주관식');

  const addQuestion = () => {
    let newContent: React.ReactNode;
    switch (selectedOption) {
      case '주관식':
        newContent = (
          <SubjectiveForm
            onRemove={() => removeQuestion(questions.length + 1)}
          />
        );
        break;
      case '객관식 (단일 선택)':
        newContent = (
          <ObjectiveSingleForm
            onRemove={() => removeQuestion(questions.length + 1)}
          />
        );
        break;
      case '객관식 (복수 선택)':
        newContent = (
          <ObjectiveMultipleForm
            onRemove={() => removeQuestion(questions.length + 1)}
          />
        );
        break;
      default:
        newContent = null;
    }

    const newQuestion = {
      id: questions.length + 1,
      type: selectedOption,
      content: newContent,
    };
    setQuestions([...questions, newQuestion]);
  };

  const removeQuestion = (id: number) => {
    setQuestions(questions.filter(question => question.id !== id));
  };

  const updateQuestionType = (id: number, newType: string) => {
    setQuestions(
      questions.map(question => {
        if (question.id === id) {
          let newContent: React.ReactNode;
          switch (newType) {
            case '주관식':
              newContent = (
                <SubjectiveForm onRemove={() => removeQuestion(id)} />
              );
              break;
            case '객관식 (단일 선택)':
              newContent = (
                <ObjectiveSingleForm onRemove={() => removeQuestion(id)} />
              );
              break;
            case '객관식 (복수 선택)':
              newContent = (
                <ObjectiveMultipleForm onRemove={() => removeQuestion(id)} />
              );
              break;
            default:
              newContent = null;
          }
          return { ...question, type: newType, content: newContent };
        }
        return question;
      })
    );
  };

  return (
    <PageContainer>
      <Subtitle title="설문 생성하기" />
      <Container>
        <img src={step3} style={{ width: '68px' }}></img>
        <PreviewButton />
      </Container>
      <MainContent>
        <Heading>당첨자 선정을 위해 필요한</Heading>
        <Heading>질문을 입력해주세요</Heading>
      </MainContent>
      <SubContainer>
        <FormContainer></FormContainer>
        {questions.map(question => (
          <Content key={question.id}>
            <SurveyForm
              selectedOption={question.type}
              setSelectedOption={(newType: string) =>
                updateQuestionType(question.id, newType)
              }
              onRemove={() => removeQuestion(question.id)}
            />
            {question.content}
          </Content>
        ))}
        <AddForm onClick={addQuestion}>+ 질문 추가하기</AddForm>
        <FixedBottom>
          <Btn_popup
            onClick={() => alert('설문 생성 완료!')}
            $isactive={isFormComplete}
            text="설문 생성 완료"
            width="350px"
          />
        </FixedBottom>
      </SubContainer>
    </PageContainer>
  );
};

export default CreateSurveyPageStep3;

const PageContainer = styled.div``;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  margin-top: 10px;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 14px;
  padding: 0 20px;
`;

const Heading = styled.h1`
  ${head1Style}
`;

const SubContainer = styled.div`
  background-color: #e9efff;
  width: 100%;
  min-height: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 26px;
  padding: 20px 0px 36px 0px;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 20px;
`;

const Content = styled.div`
  width: 350px;
  border-radius: 10px;
  border: 1px solid ${COLORS.Gray5};
  background-color: ${COLORS.white};
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
  padding: 20px;
  position: relative;
`;

const AddForm = styled.button`
  width: 350px;
  height: 48px;
  font-weight: 600;
  color: ${COLORS.Main};
  border: 1px solid ${COLORS.Main};
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  margin-bottom: 16px;
`;

const FixedBottom = styled.div`
  position: sticky;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
