import { body5Style, head3Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0px 20px;
`;

export const ConditionContainer = styled.div``;
export const HeaderContainer = styled.div`
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

export const Header = styled.p`
  ${head3Style}
  color: ${COLORS.Gray1};
  margin-top: 38px;
`;

export const WinnerContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PeriodContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: ${COLORS.Gray2};
`;

export const Content = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: ${COLORS.Gray2};
  margin-left: 5px;
`;

export const TagContainer = styled.div`
  width: 100%;
  gap: 3px;
  margin-bottom: 24px;
  display: flex;
`;

export const Tag = styled.button<{ isSelected: boolean }>`
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

export const AccordionContainer = styled.div`
  padding-bottom: 20px;
`;

export const CustomAccordion = styled(Accordion)`
  border: 1px solid ${COLORS.Gray5};
  border-radius: 10px !important;
  box-shadow: none;
  margin-bottom: 14px;

  &:before {
    display: none; // MUI에서 기본적으로 추가되는 border 제거
  }
`;

export const CustomAccordionSummary = styled(AccordionSummary)`
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

export const CommentContainer = styled.div`
  width: 100%;
  background-color: ${COLORS.Gray6};
  padding: 20px;
  border: 1px solid ${COLORS.Gray5};
  border-radius: 10px;
`;

export const Comment = styled.div`
  color: ${COLORS.Gray2};
  font-size: 14px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
`;

export const Open = styled.img`
  width: 45px;
  height: 45px;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: sticky;
  bottom: 20px;
  margin-top: 20px;
`;

export const Home = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: ${COLORS.Main};
  font-weight: 600;
`;

export const HighlightedText = styled.span`
  background-color: ${COLORS.Main}; /* 하이라이팅 색상 */
  color: white;
  font-weight: bold;
`;
