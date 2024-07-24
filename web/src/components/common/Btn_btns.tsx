import React from 'react';
import styled, { css } from 'styled-components';
import back_black from '../../assets/btn_back_black.png';
import deleteBtn from '../../assets/btn_delete.png';
import openBtn from '../../assets/btn_open.png';
import shareBtn from '../../assets/btn_share.png';
import retryBtn from '../../assets/retry.png';
import { body3Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';

interface ButtonProps {
  $variant: 'back' | 'delete' | 'open' | 'share' | 'retry' | 'add';
  width?: string;
  height?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button = ({
  $variant,
  width,
  height,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <StyledButton
      $variant={$variant}
      width={width}
      height={height}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

const buttonVariants = {
  back: back_black,
  delete: deleteBtn,
  open: openBtn,
  share: shareBtn,
  retry: retryBtn,
};

const StyledButton = styled.button<{
  $variant: 'back' | 'delete' | 'open' | 'share' | 'retry' | 'add';
  width?: string;
  height?: string;
}>`
  width: ${props => props.width || '45px'};
  height: ${props => props.height || '45px'};
  background: ${props =>
    props.$variant === 'add'
      ? COLORS.Main
      : `url(${buttonVariants[props.$variant]}) no-repeat center center`};
  background-size: contain;
  border: none;
  cursor: pointer;
  ${props =>
    props.$variant === 'add' &&
    css`
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
    `}
`;

const RetryContainer = styled.div`
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

export const BtnRetry = () => {
  return (
    <RetryContainer>
      <StyledButton $variant="retry" width="13px" height="13px" />
      <RetryText>다시하기</RetryText>
    </RetryContainer>
  );
};

export const BtnAdd = () => {
  return (
    <StyledButton $variant="add" width="63px" height="46px">
      추가
    </StyledButton>
  );
};

export default Button;
