import { useState } from 'react';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import btn_open from '@/assets/btn_open.png';
import { AccordionDetails } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { COLORS } from '@/theme';
import { body5Style, head3Style } from '@/styles/global-styles';

export const WinnerResult = () => {
  const Keywords = useSelector((state: RootState) => state.winner.keywords); // 키워드 목록을 가져옴
  const winners = useSelector((state: RootState) => state.winner.winners); // 당첨자 목록을 가져옴
  const winnerCount = useSelector(
    (state: RootState) => state.winner.winnerCount // 당첨자 수를 가져옴
  );
  const navigate = useNavigate(); // 페이지 이동을 위한 hook

  // 선택된 키워드를 관리하는 상태
  const [selectedKeyword, setSelectedKeyword] = useState<string | null>(
    Keywords[0] // 기본적으로 첫 번째 키워드를 선택
  );

  // 홈으로 이동하는 함수
  const goHome = () => {
    navigate('/');
  };

  // 페이지 새로고침 함수
  // const refreshPage = () => {
  //   window.location.reload();
  // };

  // 키워드를 클릭했을 때 호출되는 함수
  const handleKeywordClick = (keyword: string) => {
    setSelectedKeyword(
      prevKeyword => (prevKeyword === keyword ? null : keyword) // 이미 선택된 키워드를 다시 클릭하면 선택 해제, 아니면 선택
    );
  };

  const { startDate, endDate } = useSelector((state: RootState) => state.dates); // 시작 날짜와 종료 날짜를 가져옴

  // 당첨자 목록이 undefined일 경우 빈 배열로 설정
  const Winners = winners || [];

  // 텍스트에서 선택된 키워드를 하이라이팅하는 함수
  const highlightText = (text: string, highlight: string) => {
    if (!highlight) return text; // 하이라이팅할 키워드가 없으면 원본 텍스트 반환

    const parts = text.split(new RegExp(`(${highlight})`, 'gi')); // 키워드를 기준으로 텍스트를 분할
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <HighlightedText key={index}>{part}</HighlightedText> // 키워드 부분을 하이라이팅
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <Container>
      <ConditionContainer>
        <Header>당첨자 선별 조건</Header>
        <HeaderContainer>
          <WinnerContainer>
            <Title>당첨자</Title>
            <Content style={{ marginLeft: '17 px' }}>{winnerCount}</Content>
          </WinnerContainer>
          <PeriodContainer>
            <Title>참여일시</Title>
            <Content>
              {startDate} ~ {endDate}
            </Content>
          </PeriodContainer>
        </HeaderContainer>
      </ConditionContainer>

      <Header style={{ marginBottom: '12px' }}>당첨자 리스트</Header>
      <TagContainer>
        {Keywords.map((keyword, index) => (
          <Tag
            key={index}
            isSelected={selectedKeyword === keyword} // 선택된 키워드인지 확인
            onClick={() => handleKeywordClick(keyword)} // 키워드 클릭 시 호출
          >
            <span># {keyword}</span>
          </Tag>
        ))}
      </TagContainer>
      <AccordionContainer>
        {Winners.length > 0 ? (
          Winners.map((winner, index) => (
            <CustomAccordion defaultExpanded key={index}>
              <CustomAccordionSummary
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Title>{winner.author}</Title>
                <Open src={btn_open} />
              </CustomAccordionSummary>
              <AccordionDetails>
                <CommentContainer>
                  <Comment>
                    {highlightText(winner.commentText, selectedKeyword || '')}{' '}
                  </Comment>
                </CommentContainer>
              </AccordionDetails>
            </CustomAccordion>
          ))
        ) : (
          <Content>당첨자가 없습니다.</Content>
        )}
      </AccordionContainer>
      <BtnContainer>
        {/* <Home onClick={refreshPage}>당첨자 관리</Home> 새로고침 버튼 */}
        <Home onClick={goHome}>홈으로</Home> {/* 홈으로 이동 버튼 */}
      </BtnContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 0px 20px;
`;

const ConditionContainer = styled.div``;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 85px;
  padding: 0px 0px 0px 10px;
  border: #e9efff;
  border-radius: 10px;
  background-color: #e9efff;
  margin-top: 17px;
  gap: 10px;
`;

const Header = styled.p`
  ${head3Style}
  color: ${COLORS.Gray1};
  margin-top: 38px;
`;

const WinnerContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PeriodContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: ${COLORS.Gray2};
`;

const Content = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: ${COLORS.Gray2};
  margin-left: 5px;
`;

const TagContainer = styled.div`
  width: 100%;
  gap: 3px;
  margin-bottom: 24px;
  display: flex;
`;

const Tag = styled.button<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 30px;
  border-radius: 100px;
  border: 1px solid ${COLORS.Main};
  background-color: ${({ isSelected }) => (isSelected ? COLORS.Main : 'white')};
  color: ${({ isSelected }) => (isSelected ? 'white' : COLORS.Main)};
  ${body5Style}
  cursor: pointer;
`;

const AccordionContainer = styled.div`
  padding-bottom: 20px;
`;

const CustomAccordion = styled(Accordion)`
  border: 1px solid ${COLORS.Gray5};
  border-radius: 10px !important;
  box-shadow: none;
  margin-bottom: 14px;

  &:before {
    display: none; // MUI에서 기본적으로 추가되는 border 제거
  }
`;

const CustomAccordionSummary = styled(AccordionSummary)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ${COLORS.Gray6};
  border-bottom: 1px solid ${COLORS.Gray4};
  border-radius: 10px !important;

  & .MuiAccordionSummary-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 10px 0px;
  }

  &.Mui-expanded {
    div {
      margin: 0px;
    }
  }
`;

const CommentContainer = styled.div`
  width: 100%;
  background-color: ${COLORS.Gray6};
  padding: 20px;
  border: 1px solid ${COLORS.Gray5};
  border-radius: 10px;
`;

const Comment = styled.div`
  color: ${COLORS.Gray2};
  font-size: 14px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
`;

const Open = styled.img`
  width: 45px;
  height: 45px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: sticky;
  bottom: 20px;
  margin-top: 20px;
`;

const Home = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: ${COLORS.Main};
  font-weight: 600;
`;

const HighlightedText = styled.span`
  background-color: ${COLORS.Main}; /* 하이라이팅 색상 */
  color: white;
  font-weight: bold;
`;
