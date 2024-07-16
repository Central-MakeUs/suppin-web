import { useState } from 'react';
import styled from 'styled-components';
import checkRound from '../../assets/checkRound.png';
import { COLORS } from '@/theme';

export const BtnCheckRound = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <ButtonContainer onClick={toggleCheck}>
      {isChecked ? (
        <CheckImage src={checkRound} alt="Checked" />
      ) : (
        <EmptyCircle />
      )}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div``;

const CheckImage = styled.img`
  width: 20px;
  height: 20px;
`;

const EmptyCircle = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid ${COLORS.Gray3};
  border-radius: 50%;
`;
