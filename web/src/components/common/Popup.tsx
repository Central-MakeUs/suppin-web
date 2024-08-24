import styled from 'styled-components';
import { COLORS } from '@/theme';

interface PopupProps {
  title: string;
  message: string;
  onClose: () => void;
  imgSrc: string; // 이미지 소스를 받아올 수 있음
  width: string;
  height: string;
  text: string;
}

export const Popup = ({
  onClose,
  message,
  imgSrc,
  width,
  height,
  text,
}: PopupProps) => {
  return (
    <PopupOverlay>
      <Container>
        <Container2 src={imgSrc} width={width} height={height} />
        <Msg>{message}</Msg>
        <CloseBtn onClick={onClose}>{text}</CloseBtn>
      </Container>
    </PopupOverlay>
  );
};

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #333333;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 373px;
  height: 345px;
  border-radius: 16px;
  background-color: white;
  border: 1px solid ${COLORS.Gray4};
  /* padding: 20px; */
`;

const Container2 = styled.img`
  height: auto;
  margin-bottom: 40px;
`;

const Msg = styled.p`
  margin-bottom: 20px;
`;

const CloseBtn = styled.button`
  width: 90%;
  height: 46px;
  background-color: ${COLORS.Main};
  border-radius: 10px;
  border: none;
  color: ${COLORS.white};
`;
