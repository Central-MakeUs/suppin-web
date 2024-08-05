import { body3Style, body4Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import { useState } from 'react';
import styled from 'styled-components';

interface CrawlingTimeProps {
  initialCrawlingTime?: string; // 초기 크롤링 시간 값을 받을 수 있도록 수정
}

export const CrawlingTime = ({
  initialCrawlingTime = '로딩 중...',
}: CrawlingTimeProps) => {
  const [crawlingTime, setCrawlingTime] = useState<string>(initialCrawlingTime);

  return (
    <Container>
      <Content>이벤트 기간 </Content>
      {/* 이벤트 기간 수정 */}
      <Content2>{crawlingTime}</Content2>
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
