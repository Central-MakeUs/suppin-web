import { COLORS } from '@/theme';
import styled, { css } from 'styled-components';

import back from '@/assets/btn_back_black.png';
import deleteBtn from '@/assets/btn_delete.png';
import openBtn from '@/assets/btn_open.png';
import shareBtn from '@/assets/btn_share.png';
import checkRect from '@/assets/checkRect.png';
import checkRound from '@/assets/checkRound.png';
import retryBtn from '@/assets/retry.png';
import { ButtonType } from '@/components/common/button';
import { body3Style } from '@/styles/global-styles';

const buttonVariants = {
  back,
  delete: deleteBtn,
  open: openBtn,
  share: shareBtn,
  retry: retryBtn,
  checkRound,
  checkRect,
};

export const StyledButton = styled.button<{
  $variant: ButtonType;
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
  ${props =>
    props.$variant === 'retry' &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      width: 89px;
      height: 38px;
      gap: 7px;
      p {
        ${body3Style}
        color: ${COLORS.Main};
      }
    `}
  
  ${props =>
    props.$variant.startsWith('check') &&
    css<{ $variant: ButtonType }>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  img {

  width: 20px;
  height: 20px;
  }
  .empty {
    width: 20px;
  height: 20px;
  border: 1px solid ${COLORS.Gray3};
  border-radius: ${props => props.$variant === 'checkRound' && '50%'}
  `}
`;
