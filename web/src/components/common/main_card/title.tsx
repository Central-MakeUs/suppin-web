import styled from 'styled-components';
import { COLORS } from '@/theme';

export const Title = () => {
  return <TitleContainer>멤피스 공연 홍보 이벤트</TitleContainer>;
};

const TitleContainer = styled.h4`
  color: ${COLORS.Gray1};
`;
