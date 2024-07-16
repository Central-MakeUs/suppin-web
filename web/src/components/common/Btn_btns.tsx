import styled from 'styled-components';
import back_black from '../../assets/btn_back_black.png';
import deleteBtn from '../../assets/btn_delete.png';
import openBtn from '../../assets/btn_open.png';
import shareBtn from '../../assets/btn_share.png';
import retryBtn from '../../assets/retry.png';
import { body3Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';

interface IconButtonProps {
  width?: string;
  height?: string;
  onClick?: () => void;
}

export const BackButton = ({ width, height, onClick }: IconButtonProps) => {
  return (
    <IconButton
      imgsrc={back_black}
      width={width}
      height={height}
      onClick={onClick}
    />
  );
};

export const DeleteButton = ({ width, height, onClick }: IconButtonProps) => {
  return (
    <IconButton
      imgsrc={deleteBtn}
      width={width}
      height={height}
      onClick={onClick}
    />
  );
};

export const OpenButton = ({ width, height, onClick }: IconButtonProps) => {
  return (
    <IconButton
      imgsrc={openBtn}
      width={width}
      height={height}
      onClick={onClick}
    />
  );
};

export const ShareButton = ({ width, height, onClick }: IconButtonProps) => {
  return (
    <IconButton
      imgsrc={shareBtn}
      width={width}
      height={height}
      onClick={onClick}
    />
  );
};

export const BtnRetry = () => {
  return (
    <Container>
      <SmallIconButton imgsrc={retryBtn} />
      <RetryText>다시하기</RetryText>
    </Container>
  );
};

export const BtnAdd = () => {
  return (
    <Btn_Add>
      <Add>추가</Add>
    </Btn_Add>
  );
};

const IconButton = styled.button<{
  imgsrc: string;
  width?: string;
  height?: string;
}>`
  width: ${props => props.width || '45px'};
  height: ${props => props.height || '45px'};
  background: url(${props => props.imgsrc}) no-repeat center center;
  background-size: contain;
  border: none;
  cursor: pointer;
`;

const SmallIconButton = styled.button<{ imgsrc: string }>`
  width: 13px;
  height: 13px;
  background: url(${props => props.imgsrc}) no-repeat center center;
  background-size: contain;
  border: none;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 89px;
  height: 38px;
  gap: 7px;
`;

const RetryText = styled.p`
  ${body3Style}
  color: ${COLORS.Main};
`;

const Btn_Add = styled.button`
  width: 63px;
  height: 46px;
  border-radius: 10px;
  border: none;
  background-color: ${COLORS.Main};
`;

const Add = styled.h4`
  color: white;
`;
