import step3 from '@/assets/step3.png';
import { SelectValue } from '@radix-ui/react-select';
import { useNavigate } from 'react-router-dom';
import { Box } from '../common/box';
import { PreviewButton } from '../common/preview-button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from '../common/select';
import { Subtitle } from '../common/Subtitle';
import {
  CreateSurveyPageContainer,
  CreateSurveyPageContent,
  CreateSurveyPageHeader,
} from './create-survey-page3.styles';

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
          <div className="box-header">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue defaultValue="" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">주관식</SelectItem>
                  <SelectItem value="banana">객관식 (단일 선택)</SelectItem>
                  <SelectItem value="blueberry">객관식 (복수 선택)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </Box>
      </CreateSurveyPageContent>
    </CreateSurveyPageContainer>
  );
};
