import { COLORS } from '@/theme';
import styled from 'styled-components';

interface BtnPopupProps {
  onClick: () => void;
  text?: string;
  width?: string;
  height?: string;
  isactive?: boolean;
}

export const Btn_popup = ({
  onClick,
  text = '확인',
  width = '318px',
  height = '50px',
  isactive = true,
}: BtnPopupProps) => {
  return (
    <Btn
      onClick={isactive ? onClick : undefined}
      width={width}
      height={height}
      isActive={isactive}
      disabled={!isactive}
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
