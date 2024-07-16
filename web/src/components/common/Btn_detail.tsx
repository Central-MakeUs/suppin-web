import styled from 'styled-components';
import { COLORS } from '@/theme';
import { body5Style } from '@/styles/global-styles';
import arrowIcon from '../../assets/rightarrow.png'; // 화살표 아이콘 경로

export const Btn_detail = () => {
  return (
    <DetailButton>
      <Detail>당첨자 세부정보</Detail>
      <Arrow src={arrowIcon} alt="arrow" />
    </DetailButton>
  );
};

const DetailButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${COLORS.Gray3};
  cursor: pointer;
  ${body5Style}
  padding: 0;
`;

const Arrow = styled.img`
  margin-left: 5px;
  width: 5px;
  height: 10px;
`;

const Detail = styled.p`
  font-size: 12px;
  font-weight: 500;
`;
