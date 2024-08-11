// 당첨자 선청하기 - 댓글 크롤링 결과 페이지입니다.

import { CrawlingTime } from '@/components/common/CrawlingTime';
import { Winner } from '@/components/common/Winner';
import { getCommentsList } from '@/services/apis/crawling.service';
import { body3Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Comment = () => {
  const [comments, setComments] = useState([]); // 상태로 댓글 데이터를 관리
  const [loading, setLoading] = useState(true); // 로딩 상태 관리
  const [participantCount, setParticipantCount] = useState(0); // 참여자 수 상태 관리
  const eventId = 1; // 이벤트 ID를 할당
  const url = 'https://www.youtube.com/watch?v=xnK3b1CTAh0'; // 임시 유튜브 URL

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await getCommentsList({
          eventId,
          url,
          page: 1,
          size: 10,
        });

        if (response.data.comments) {
          setComments(response.data.comments); // API로 가져온 댓글 데이터를 상태에 저장
        }
        setParticipantCount(response.data.totalCommentCount); // 참여자 수 설정
        console.log(response);
      } catch (error) {
        console.error('Failed to fetch comments:', error);
      } finally {
        setLoading(false); // 로딩 완료
      }
    };

    fetchComments();
  }, [eventId, url]); // 이벤트 ID와 URL이 변경될 때마다 다시 호출

  return (
    <>
      <Container>
        <WinnerCount>참여자 {participantCount}</WinnerCount>{' '}
        {/* 참여자 수 표시 */}
        <CrawlingTime />
      </Container>
      <Container2>
        {comments.length > 0 ? (
          comments.map((item, index) => (
            <Winner
              key={index}
              title={item.author} // 댓글 작성자
              comment={item.commentText} // 댓글 내용
            />
          ))
        ) : (
          <div>댓글이 없습니다.</div>
        )}
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
  gap: 12px;
  padding: 0px 20px;
`;

const WinnerCount = styled.p`
  margin-top: 33px;
  margin-bottom: 13px;
  ${body3Style}
  color: ${COLORS.Gray3};
`;
