import React, { useState } from 'react';
import styled from 'styled-components';
import checkRound from '../../assets/checkRound.png';
import checkRect from '../../assets/checkRect.png';
import { COLORS } from '@/theme';

interface CheckButtonProps {
  variant: 'round' | 'rect';
}

export const CheckButton = ({ variant }: CheckButtonProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <ButtonContainer onClick={toggleCheck}>
      {isChecked ? (
        <CheckImage
          src={variant === 'round' ? checkRound : checkRect}
          alt="Checked"
        />
      ) : (
        <EmptyShape variant={variant} />
      )}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
`;

const CheckImage = styled.img`
  width: 20px;
  height: 20px;
`;

const EmptyShape = styled.div<{ variant: 'round' | 'rect' }>`
  width: 20px;
  height: 20px;
  border: 1px solid ${COLORS.Gray3};
  ${props =>
    props.variant === 'round' &&
    `
    border-radius: 50%;
  `}
`;
