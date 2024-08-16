import { SubjectiveWrapper } from '@/components/Survey/subjective.styles';
import React, { useEffect } from 'react';
import { Textarea } from '../common/textarea';

type SubjectiveProps = {
  value: string;
  onChange: (value: string) => void;
};

export const Subjective: React.FC<SubjectiveProps> = ({ value, onChange }) => {
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
    adjustHeight(e.target);
  };

  const adjustHeight = (textarea: HTMLTextAreaElement) => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  useEffect(() => {
    const textarea = document.querySelector('textarea');
    if (textarea) {
      adjustHeight(textarea as HTMLTextAreaElement);
    }
  }, [value]);

  return (
    <SubjectiveWrapper>
      <Textarea
        name="text"
        value={value}
        onInput={handleInput}
        placeholder="질문을 입력해주세요"
      />
    </SubjectiveWrapper>
  );
};
