import { Subtitle } from '@/components/common/Subtitle';
import { QuestionType } from '@/types/survey';
import { Choice } from './choice';
import { EventIntro } from './event-intro';
import { Personal } from './personal';
import { Policy } from './policy';
import { Subjective } from './subjective';
import { SurveyPreviewWrapper } from './survey-preview.styles';

export const SurveyPreview = () => {
  const questions = JSON.parse(
    sessionStorage.getItem('question') as string
  ) as {
    id: string;
    type: QuestionType;
    text: string;
    options: string[];
  }[];

  return (
    <SurveyPreviewWrapper>
      <Subtitle title="설문 미리보기" />
      <div className="content">
        <EventIntro />
        <Policy />
        <Personal />
        {questions
          ? questions.map(q => {
              if (q.type === 'SUBJECTIVE') {
                return <Subjective key={q.id} question={q} />;
              } else {
                return <Choice key={q.id} question={q} />;
              }
            })
          : null}
      </div>
    </SurveyPreviewWrapper>
  );
};
