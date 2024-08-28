import btn_open from '@/assets/btn_open.png';
import { RootState } from '@/store';
import { AccordionDetails, Container } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  AccordionContainer,
  Comment,
  CommentContainer,
  ConditionContainer,
  Content,
  CustomAccordion,
  CustomAccordionSummary,
  Header,
  HeaderContainer,
  HighlightedText,
  Home,
  Open,
  PeriodContainer,
  Tag,
  TagContainer,
  Title,
  WinnerContainer,
} from './winner-result.styles';
import { BtnContainer } from './winner.styles';

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
