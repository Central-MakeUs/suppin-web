// 당첨자 선정 시 컴포넌트

import { COLORS } from '@/theme';
import { useState } from 'react';
import dropDownBtn from '../../assets/btn_open.png';
import styled from 'styled-components';

interface CommentBoxProps {
  title: string;
  comment: string;
}

export const Winner = ({ title, comment }: CommentBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <TitleContainer onClick={toggleOpen}>
        <Title>{title}</Title>
        <DropDownIcon isOpen={isOpen} src={dropDownBtn} alt="dropdown" />
      </TitleContainer>
      {isOpen && <Comment>{comment}</Comment>}
    </Container>
  );
};

const Container = styled.div`
  width: 349px;
  /* border: 1px solid ${COLORS.Gray3}; */
  border-radius: 8px;
  margin-bottom: 8px;
  padding: 19px;
  background-color: ${COLORS.white};
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${COLORS.Gray2};
`;

const DropDownIcon = styled.img<{ isOpen: boolean }>`
  width: 24px;
  height: 24px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
`;

const Comment = styled.div`
  margin-top: 12px;
  padding: 8px;
  border: 1px solid ${COLORS.Gray4};
  border-radius: 8px;
  background-color: ${COLORS.Gray5};
  color: ${COLORS.Gray1};
  font-size: 14px;
  word-wrap: break-word; /* 긴 단어를 줄바꿈 */
  overflow-wrap: break-word; /* 긴 단어가 있을 때 줄바꿈 */
  white-space: pre-wrap; /* 연속된 공백을 유지하고 줄바꿈을 허용 */
`;
