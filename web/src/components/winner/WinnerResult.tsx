import { RootState } from '@/store';
import { head3Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import btn_open from '@/assets/btn_open.png';
import { AccordionDetails } from '@mui/material';

export const WinnerResult = () => {
  const { winners, winnerCount } = useSelector(
    (state: RootState) => state.winner
  );
  const { startDate, endDate } = useSelector((state: RootState) => state.dates);
  console.log(winnerCount);
  console.log(startDate);
  return (
    <Container>
      <ConditionContainer>
        <Header>당첨자 선별 조건</Header>
        <HeaderContainer>
          <WinnerContainer>
            <Title>당첨자 </Title>
            <Content style={{ marginLeft: '12px' }}>{winnerCount}</Content>

            {/* {winners.map((winner, index) => (
              <Content key={index}>
                {winner.author}: {winner.commentText}
              </Content>
            ))} */}
          </WinnerContainer>
          <PeriodContainer>
            <Title>참여일시</Title>
            <Content>
              {startDate} ~ {endDate}
            </Content>
          </PeriodContainer>
        </HeaderContainer>
      </ConditionContainer>

      <Header style={{ marginBottom: '24px' }}>당첨자 리스트</Header>
      <TagContainer></TagContainer>
      <AccordionContainer>
        {winners.map((winner, index) => (
          <CustomAccordion key={index}>
            <CustomAccordionSummary
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Title>{winner.author}</Title>
              <Open src={btn_open} />
            </CustomAccordionSummary>
            <AccordionDetails>
              <CommentContainer>
                <Comment>{winner.commentText}</Comment>
              </CommentContainer>
            </AccordionDetails>
          </CustomAccordion>
        ))}
      </AccordionContainer>
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
  padding: 15px;
  border: ${COLORS.Sub2};
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
  gap: 15px;
`;

const PeriodContainer = styled.div`
  display: flex;
  gap: 15px;
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
`;

const TagContainer = styled.div`
  width: 100%;
  gap: 3px;
`;

const AccordionContainer = styled.div``;

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
