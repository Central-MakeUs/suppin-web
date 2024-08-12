import React, { useState } from 'react';
import { Textarea } from '../common/textarea';
import { SubjectiveWrapper } from './subjective.styles';

export const Subjective = () => {
  const [text, setText] = useState<string>('');

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    adjustHeight(e.target);
  };

  const adjustHeight = (textarea: HTMLTextAreaElement) => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  return (
    <SubjectiveWrapper>
      <Textarea
        name="text"
        value={text}
        onInput={handleInput}
        placeholder="질문을 입력해주세요"
      />
    </SubjectiveWrapper>
  );
};
