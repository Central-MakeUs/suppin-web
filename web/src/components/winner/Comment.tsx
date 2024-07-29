// 당첨자 선청하기 - 댓글 크롤링 결과 페이지입니다.

import { CrawlingTime } from '@/components/common/CrawlingTime';
import { Winner } from '@/components/common/Winner';
import { body3Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import styled from 'styled-components';

const Comment = () => {
  // 임시 데이터
  const comments = [
    {
      title: 'Suppin2024',
      comment: '평상시에 스윗미임 영상을 열심히 보다...',
    },
    {
      title: 'CMC 23',
      comment:
        '이벤트를 한다는 소식을 듣고 학교 친구들과 함께.asdadasdasldalsdklasdjlasjdlasjasdajsdjlasjdlajsdlajsdlajsdljalsdjalsjdlasjdasdadasdasldalsdklasdjlasjdlasjasdajsdjlasjdlajsdlajsdlajsdljalsdjalsjdlasjdasdadasdasldalsdklasdjlasjdlasjasdajsdjlasjdlajsdlajsdlajsdljalsdjalsjdlasjd',
    },
  ];
  return (
    <>
      <Container>
        <WinnerCount>참여자 300</WinnerCount>
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

export default Comment;

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
