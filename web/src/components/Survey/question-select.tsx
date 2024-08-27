import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/common/select';
import { QuestionSelectWrapper } from '@/components/Survey/question-select.styles';
import { X } from 'lucide-react';

const valueMap = {
  SUBJECTIVE: '주관식',
  SINGLE_CHOICE: '객관식 (단일 선택)',
  MULTIPLE_CHOICE: '객관식 (복수 선택)',
} as const;

type ValueType = keyof typeof valueMap;

type QuestionSelectProps = {
  value: ValueType;
  onChange: (value: ValueType) => void;
  onDelete: () => void;
};

export const QuestionSelect = ({
  value,
  onChange,
  onDelete,
}: QuestionSelectProps) => {
  return (
    <QuestionSelectWrapper>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="select-trigger">
          <SelectValue className="select-value">{valueMap[value]}</SelectValue>
        </SelectTrigger>
        <SelectContent
          className="select-content"
          style={{
            background: '#ffffff',
            boxShadow: '0px 0px 10px 0px #00000040',
          }}
        >
          <SelectGroup className="select-group">
            <SelectItem className="select-item" value="SUBJECTIVE">
              {valueMap.SUBJECTIVE}
            </SelectItem>
            <SelectItem className="select-item" value="SINGLE_CHOICE">
              {valueMap.SINGLE_CHOICE}
            </SelectItem>
            <SelectItem className="select-item" value="MULTIPLE_CHOICE">
              {valueMap.MULTIPLE_CHOICE}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <X onClick={onDelete} style={{ cursor: 'pointer' }} />{' '}
      {/* Add the onClick handler */}
    </QuestionSelectWrapper>
  );
};
