import styled from 'styled-components';
import { body6Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';

export const Comment = () => {
  return <CommentContainer>댓글 수 | 20</CommentContainer>;
};

const CommentContainer = styled.p`
  ${body6Style}
  color: ${COLORS.Gray3};
`;
