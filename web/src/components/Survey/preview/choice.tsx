import { Badge } from '@/components/common/badge';
import { Box } from '@/components/common/box';
import { Input } from '@/components/common/input';
import { QuestionType } from '@/types/survey';
import { ChoiceWrapper } from './choice.styles';

export const Choice = ({
  question,
}: {
  question: {
    id: string;
    type: QuestionType;
    text: string;
    options: string[];
  };
}) => {
  return (
    <ChoiceWrapper>
      <Box className="box-wrapper">
        <Badge variant="default">
          객관식 ({question.type === 'SINGLE_CHOICE' ? '단일선택' : '복수선택'})
        </Badge>
        <span>{question.text}</span>
        <div className="question-list">
          {question.options.map((choice, idx) => (
            <Box className="box" key={idx}>
              <Input disabled placeholder={choice} value={choice} />
            </Box>
          ))}
        </div>
      </Box>
    </ChoiceWrapper>
  );
};
