import { COLORS } from '@/theme';
import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import btn_open from '@/assets/btn_open.png';

interface CommentBoxProps {
  title: string;
  comment: string;
}
export const Winner = ({ title, comment }: CommentBoxProps) => {
  return (
    <Container>
      <CustomAccordion>
        <CustomAccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Title>{title}</Title>
          <Open src={btn_open} />
        </CustomAccordionSummary>
        <Container2>
          <CommentContainer>
            <Comment>{comment}</Comment>
          </CommentContainer>
        </Container2>
      </CustomAccordion>
    </Container>
  );
};

const Container = styled.div`
  margin: 10px 0;
  width: 100%;
`;

const CustomAccordion = styled(Accordion)`
  border: 1px solid ${COLORS.Gray5};
  border-radius: 10px !important;
  box-shadow: none;

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

const Container2 = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
const CommentContainer = styled.div`
  width: 90%;
  background-color: ${COLORS.Gray6};
  padding: 20px;
  border: 1px solid ${COLORS.Gray5};
  border-radius: 10px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${COLORS.Gray1};
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
