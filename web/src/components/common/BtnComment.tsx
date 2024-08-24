import styled from 'styled-components';
import comment from '../../assets/comment.png';

import { body3Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';

const BtnComment = () => {
  return (
    <CommentButton>
      <CommentImage src={comment} alt="Comment Icon" />
      <CommentText>댓글 수집하기</CommentText>
    </CommentButton>
  );
};

export default BtnComment;

const CommentButton = styled.button`
  width: 140px;
  height: 42px;
  background-color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 10px;
  border-radius: 10px;
`;

const CommentImage = styled.img`
  width: 17px;
  height: 17px;
  margin-right: 8px;
`;

const CommentText = styled.p`
  margin: 0;
  ${body3Style}
  color:${COLORS.Gray2}
`;
