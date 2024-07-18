import { COLORS } from '@/theme';
import styled from 'styled-components';

interface BtnPopupProps {
  onClick: () => void;
}

export const Btn_popup = ({ onClick }: BtnPopupProps) => {
  return (
    <Btn onClick={onClick}>
      <Confirm>확인</Confirm>
    </Btn>
  );
};

const Btn = styled.button`
  width: 318px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: ${COLORS.Main};
`;

const Confirm = styled.h4`
  color: ${COLORS.white};
`;
