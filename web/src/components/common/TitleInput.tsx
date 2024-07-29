import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@/theme';
import { head2Style } from '@/styles/global-styles';

interface TitleInputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TitleInput = ({
  placeholder,
  value,
  onChange,
}: TitleInputProps) => {
  return (
    <Container>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isFilled={value.length > 0}
      />
      <Underline isActive={value.length > 0} />
    </Container>
  );
};

const Container = styled.div`
  width: 314px;
  margin-bottom: 10px;
  margin-top: 7px;
`;

const Input = styled.input<{ isFilled: boolean }>`
  color: ${props => (props.isFilled ? COLORS.black : COLORS.Gray2)};
  background-color: transparent;
  border: none;
  outline: none;
  ${head2Style}
`;

const Underline = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 2px;
  background-color: ${COLORS.Gray5};
`;

export default TitleInput;
