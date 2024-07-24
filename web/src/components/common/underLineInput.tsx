import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '@/theme';
import { body4Style } from '@/styles/global-styles';

interface UnderlineInputProps {
  placeholder: string;
  width?: string;
  marginBottom?: string;
  padding?: string;
  marginTop?: string;
  fontSize?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UnderlineInput = ({
  placeholder,
  width = '314px',
  marginBottom = '10px',
  padding = '5px 0',
  marginTop = '27px',
  fontSize = '16px',
  value,
  onChange,
}: UnderlineInputProps) => {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <Container width={width} marginBottom={marginBottom}>
      <Input
        type="text"
        value={value ?? text}
        onChange={handleChange}
        placeholder={placeholder}
        isFilled={(value ?? text).length > 0}
        padding={padding}
        marginTop={marginTop}
        fontSize={fontSize}
      />
      <Underline isActive={(value ?? text).length > 0} />
    </Container>
  );
};

const Container = styled.div<{ width: string; marginBottom: string }>`
  width: ${props => props.width};
  margin-bottom: ${props => props.marginBottom};
`;

const Input = styled.input<{
  isFilled: boolean;
  padding: string;
  marginTop: string;
  fontSize: string;
}>`
  color: ${props => (props.isFilled ? COLORS.black : COLORS.Gray2)};
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  padding: ${props => props.padding};
  margin-top: ${props => props.marginTop};
  font-size: ${props => props.fontSize};
  ${body4Style}
`;

const Underline = styled.div<{ isActive: boolean }>`
  width: 308px;
  height: 1px;
  background-color: ${props => (props.isActive ? COLORS.Main : COLORS.Gray3)};
`;
