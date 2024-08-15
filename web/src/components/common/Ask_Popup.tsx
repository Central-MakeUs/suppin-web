import styled from 'styled-components';
import { body4Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';

interface textProps {
  comment: string;
  text1: string;
  text2: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const AskPopup = ({
  comment,
  text1,
  text2,
  onConfirm,
  onCancel,
}: textProps) => {
  return (
    <Overlay>
      <Container>
        <Comment>{comment}</Comment>
        <BtnContainer>
          <Btn2 onClick={onCancel}>{text2}</Btn2>
          <Btn1 onClick={onConfirm}>{text1}</Btn1>
        </BtnContainer>
      </Container>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Container = styled.div`
  width: 350px;
  height: 151px;
  border-radius: 10px;
  padding: 16px;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Comment = styled.div`
  color: ${COLORS.Gray1};
  ${body4Style}
  margin-bottom: 23px;
  text-align: center;
  white-space: pre-line;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Btn1 = styled.button`
  width: 155px;
  height: 46px;
  border-radius: 10px;
  border: none;
  background-color: ${COLORS.Main};
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Btn2 = styled.button`
  width: 155px;
  height: 46px;
  border-radius: 10px;
  border: none;
  background-color: ${COLORS.Sub2};
  color: ${COLORS.Main};
  font-weight: 600;
  cursor: pointer;
`;
