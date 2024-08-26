import { Subtitle } from '@/components/common/Subtitle';
import { Policy } from './policy';
import { SurveyPreviewWrapper } from './survey-preview.styles';

export const SurveyPreview = () => {
  return (
    <SurveyPreviewWrapper>
      <Subtitle title="설문 미리보기" />
      <Policy />
    </SurveyPreviewWrapper>
  );
};
