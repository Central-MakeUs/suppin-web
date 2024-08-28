import { Badge } from '@/components/common/badge';
import { Box } from '@/components/common/box';
import { Textarea } from '@/components/common/textarea';
import { QuestionType } from '@/types/survey';
import { SubjectiveWrapper } from './subjective.styles';

export const Subjective = ({
  question,
}: {
  question: {
    id: string;
    type: QuestionType;
    text: string;
    options: string[];
  };
}) => {
  console.log(question);

  return (
    <SubjectiveWrapper>
      <Box className="box">
        <Badge variant="default">주관식</Badge>
        <div className="data">
          <span>{question.text}</span>
          <Textarea disabled placeholder="내용을 입력해주세요" />
        </div>
      </Box>
    </SubjectiveWrapper>
  );
};
