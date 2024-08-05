import styled from 'styled-components';
import survey from '../../assets/survey.png';

import { body3Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';

const BtnSurvey = () => {
  return (
    <CommentButton>
      <CommentImage src={survey} alt="Comment Icon" />
      <CommentText>설문 생성하기</CommentText>
    </CommentButton>
  );
};

export default BtnSurvey;

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
  border-radius: 5px;
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
