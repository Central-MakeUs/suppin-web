import { RootState } from '@/store';
import { body3Style, body4Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const CrawlingTime = ({}) => {
  const period = useSelector((state: RootState) => state.crawling.period);

  // console.log(period);
  return (
    <Container>
      <Content>댓글 수집 시간 </Content>
      <Content2>{period}</Content2>
    </Container>
  );
};

const Container = styled.div`
  width: 342px;
  height: 47px;
  background-color: #f4f7ff;
  border-radius: 100px;
  border: 1px solid ${COLORS.Sub2};
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Content = styled.div`
  /* font-size: 16px; */
  display: flex;
  ${body3Style}
  color: ${COLORS.Gray2};
  text-align: center;
  margin: 15px 0px 15px 15px;
`;

const Content2 = styled.div`
  /* font-size: 16px; */
  display: flex;
  ${body4Style}
  color: ${COLORS.Gray2};
  margin: 15px 0px 15px 0px;
`;
