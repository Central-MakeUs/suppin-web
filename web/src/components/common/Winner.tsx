// 당첨자 선정 시 컴포넌트

import { COLORS } from '@/theme';
import styled from 'styled-components';

interface CommentBoxProps {
  title: string;
  comment: string;
}

export const Winner = ({ title, comment }: CommentBoxProps) => {
  return (
    <Container>
      <Container2>
        <Title>{title}</Title>
        <Comment>{comment}</Comment>
      </Container2>
    </Container>
  );
};

const Container = styled.div`
  width: 350px;
  min-height: 120px;
  border: 1px solid ${COLORS.Gray5};
  padding: 19px;
  border-radius: 10px;
`;
const Container2 = styled.div``;
const Title = styled.p`
  font-size: 16px;

  font-weight: 600;
  color: ${COLORS.Gray1};
  padding-bottom: 13px;
  border-bottom: 1px solid ${COLORS.Gray4};
`;
const Comment = styled.div`
  margin-top: 8px;
  color: ${COLORS.Gray2};
  font-size: 14px;
  word-wrap: break-word; /* 긴 단어를 줄바꿈 */
  overflow-wrap: break-word; /* 긴 단어가 있을 때 줄바꿈 */
  white-space: pre-wrap; /* 연속된 공백을 유지하고 줄바꿈을 허용 */
`;
