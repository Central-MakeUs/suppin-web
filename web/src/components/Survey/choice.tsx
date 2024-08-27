import { ChoiceWrapper } from '@/components/Survey/choice.styles';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';
import { Box } from '../common/box';
import { Input } from '../common/input';

type ChoiceProps = {
  type: 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE';
  value: string;
  onChange: (value: string) => void;
  options: string[];
  onOptionsChange: (options: string[]) => void;
};

export const Choice = ({
  type,
  value,
  onChange,
  options,
  onOptionsChange,
}: ChoiceProps) => {
  const [choices, setChoices] = useState<{ id: string; value: string }[]>(
    options.map(option => ({ id: uuidv4(), value: option }))
  );

  useEffect(() => {
    if (choices.length < 2) {
      const newChoices = [...choices, { id: uuidv4(), value: '' }];
      setChoices(newChoices);
      onOptionsChange(newChoices.map(choice => choice.value));
    }
  }, [type, choices, onOptionsChange]);

  const handleAddChoice = () => {
    if (choices.length === 10) {
      toast.error('질문 선택지는 최대 10개입니다.');
      return;
    }
    const newChoices = [...choices, { id: uuidv4(), value: '' }];
    setChoices(newChoices);
    onOptionsChange(newChoices.map(choice => choice.value));
  };

  const handleRemoveChoice = (id: string) => {
    if (choices.length <= 2) {
      toast.error('질문 유형에서는 최소 2개의 선택지가 필요합니다.');
      return;
    }
    const newChoices = choices.filter(choice => choice.id !== id);
    setChoices(newChoices);
    onOptionsChange(newChoices.map(choice => choice.value));
  };

  const handleChangeChoice = (id: string, value: string) => {
    const newChoices = choices.map(choice =>
      choice.id === id ? { ...choice, value } : choice
    );
    setChoices(newChoices);
    onOptionsChange(newChoices.map(choice => choice.value));
  };

  return (
    <ChoiceWrapper>
      <Input
        className="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="질문을 입력해주세요"
      />
      <div className="question-list">
        {choices.map(choice => (
          <Box className="box" key={choice.id}>
            <Input
              placeholder="선택지의 내용을 입력해주세요"
              value={choice.value}
              onChange={e => handleChangeChoice(choice.id, e.target.value)}
            />
            <X onClick={() => handleRemoveChoice(choice.id)} />
          </Box>
        ))}
      </div>
      <div
        className="plus"
        onClick={handleAddChoice}
        style={{ cursor: 'pointer' }}
      >
        + 선택지 추가 생성
      </div>
    </ChoiceWrapper>
  );
};
