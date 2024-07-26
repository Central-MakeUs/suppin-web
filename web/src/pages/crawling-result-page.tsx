// 당첨자 선청하기 - 댓글 크롤링 결과 페이지입니다.

import { CrawlingTime } from '@/components/common/CrawlingTime';
import { SubTab } from '@/components/common/SubTab';
import { Subtitle } from '@/components/common/Subtitle';
import { Winner } from '@/components/common/Winner';
import { body3Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import styled from 'styled-components';

const CrawlingPage = () => {
  // 임시 데이터
  const comments = [
    {
      title: 'Suppin2024',
      comment: '평상시에 스윗미임 영상을 열심히 보다...',
    },
    {
      title: 'CMC 23',
      comment:
        '이벤트를 한다는 소식을 듣고 학교 친구들과 함께.asdadasdasldalsdklasdjlasjdlasjasdajsdjlasjdlajsdlajsdlajsdljalsdjalsjdlasjd',
    },
  ];
  return (
    <>
      {/* 추후 title 수정 예정 */}
      <Subtitle title="멤피스 공연 홍보 이벤트" />
      <SubTab
        tabs={[
          { label: '댓글 내용', value: 'comment' },
          { label: '당첨자 선정', value: 'winner' },
        ]}
        onTabChange={value => console.log('Selected tab:', value)} // 지워도 됨
      />
      <Container>
        <WinnerCount>당첨자 300</WinnerCount>
        <CrawlingTime />
      </Container>
      <Container2>
        {comments.map((item, index) => (
          <Winner key={index} title={item.title} comment={item.comment} />
        ))}
      </Container2>
    </>
  );
};

export default CrawlingPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  margin-bottom: 31px;
`;

const Container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const WinnerCount = styled.p`
  margin-top: 33px;
  margin-bottom: 13px;
  ${body3Style}
  color: ${COLORS.Gray3};
`;
