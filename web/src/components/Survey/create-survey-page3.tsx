import step3 from '@/assets/step3.png';
import { useNavigate } from 'react-router-dom';
import { Box } from '../common/box';
import { PreviewButton } from '../common/preview-button';
import { Subtitle } from '../common/Subtitle';
import {
  CreateSurveyPageContainer,
  CreateSurveyPageContent,
  CreateSurveyPageHeader,
} from './create-survey-page3.styles';
import { QuestionSelect } from './question-select';
import { Subjective } from './subjective';

export const CreateSurveyPageStep3 = () => {
  const router = useNavigate();

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
        <Box className="box">
          <QuestionSelect />
          <Subjective />
        </Box>
      </CreateSurveyPageContent>
    </CreateSurveyPageContainer>
  );
};
