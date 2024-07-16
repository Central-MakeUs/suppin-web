// 네모 클릭 상자

import { useState } from 'react';
import styled from 'styled-components';
import checkRect from '../../assets/checkRect.png';
import { COLORS } from '@/theme';

export const BtnCheckRect = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <ButtonContainer onClick={toggleCheck}>
      {isChecked ? (
        <CheckImage src={checkRect} alt="Checked" />
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
`;
