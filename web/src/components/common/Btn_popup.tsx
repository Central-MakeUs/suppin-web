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
      disabled={!isActive}
    >
      <Confirm>{text}</Confirm>
    </Btn>
  );
};

const Btn = styled.button<{
  width: string;
  height: string;
}>`
  width: ${props => props.width};
  height: ${props => props.height};
  border: none;
  border-radius: 10px;
  background-color: ${COLORS.Main};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Confirm = styled.h4`
  color: ${COLORS.white};
`;
