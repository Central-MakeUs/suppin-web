import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '@/theme';

interface UnderlineInputProps {
  placeholder: string;
}

export const UnderlineInput = ({ placeholder }: UnderlineInputProps) => {
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
        isFilled={text.length > 0}
      />
      <Underline isActive={text.length > 0} />
    </Container>
  );
};

const Container = styled.div`
  width: 314px;
  margin-bottom: 10px;
`;

const Input = styled.input<{ isFilled: boolean }>`
  color: ${props => (props.isFilled ? COLORS.black : COLORS.Gray2)};
  background-color: transparent;
  border: none;
  outline: none;
  width: 314px;
  padding: 5px 0;
`;

const Underline = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 1px;
  background-color: ${props => (props.isActive ? COLORS.Main : COLORS.Gray3)};
`;
