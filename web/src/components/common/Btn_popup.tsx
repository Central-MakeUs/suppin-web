import { COLORS } from '@/theme';
import styled from 'styled-components';

interface BtnPopupProps {
  onClick: () => void;
  text?: string;
  width?: string;
  height?: string;
  isActive?: boolean;
}

export const Btn_popup = ({
  onClick,
  text = '확인',
  width = '318px',
  height = '50px',
  isActive = true,
}: BtnPopupProps) => {
  return (
    <Btn
      onClick={isActive ? onClick : undefined}
      width={width}
      height={height}
      isActive={isActive}
      disabled={!isActive}
    >
      <Confirm>{text}</Confirm>
    </Btn>
  );
};

const Btn = styled.button<{
  width: string;
  height: string;
  isActive: boolean;
}>`
  width: ${props => props.width};
  height: ${props => props.height};
  border: none;
  border-radius: 10px;
  background-color: ${props => (props.isActive ? COLORS.Main : COLORS.Gray3)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  color: ${COLORS.white};
`;

const Confirm = styled.h4`
  margin: 0;
`;
