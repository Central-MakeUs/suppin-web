import { ComponentProps, useState } from 'react';
import styled from 'styled-components';
import checkRect from '../../assets/checkRect.png';
import checkRound from '../../assets/checkRound.png';

type CheckButtonProps = {
  variant: 'round' | 'rect';
} & ComponentProps<'button'>;

export const CheckButton = ({ variant, ...props }: CheckButtonProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <ButtonContainer {...props} onClick={toggleCheck}>
      {isChecked ? (
        <img src={variant === 'round' ? checkRound : checkRect} alt="Checked" />
      ) : (
        <div className="empty" />
      )}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button``;
