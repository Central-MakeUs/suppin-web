import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '@/theme';
import Button from './Btn_btns';

interface SurveyInputProps {
  placeholder: string;
}

export const SurveyInput = ({ placeholder }: SurveyInputProps) => {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <Container>
      <Input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <Button
        $variant="delete"
        onClick={() => alert('Delete Button Clicked')}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.Gray5};
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  width: 314px;
  height: 46px;
`;

const Input = styled.input`
  background-color: ${COLORS.Gray5};
  color: ${COLORS.Gray1};
  border: none;
  outline: none;
  flex: 1;
  margin-right: 10px;
  font-size: 16px;
  font-weight: 400; /* regular */
`;
