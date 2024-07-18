import styled from 'styled-components';
import { Btn_popup } from './Btn_popup';
import { COLORS } from '@/theme';

interface PopupProps {
  title: string;
  message: string;
  onClose: () => void;
}

export const Popup = ({ message, onClose }: PopupProps) => {
  return (
    <PopupOverlay>
      <Container>
        <Container2></Container2>
        <Msg>{message}</Msg>
        <Btn_popup onClick={onClose} />
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
  width: 350px;
  height: 345px;
  border-radius: 16px;
  background-color: white;
  border: 1px solid ${COLORS.Gray4};
`;

const Container2 = styled.div`
  border: 1px solid ${COLORS.Gray4};
  width: 200px;
  height: 150px;
  margin-bottom: 20px;
`;

const Msg = styled.p`
  margin-bottom: 20px;
`;
