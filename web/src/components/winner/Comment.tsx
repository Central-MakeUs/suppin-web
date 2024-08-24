import styled from 'styled-components';
import { CrawlingTime } from '@/components/common/CrawlingTime';
import { Winner } from '@/components/common/Winner';
import { body3Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';

interface CommentProps {
  eventId: string | null;
  url: string | null;
  comments: any[];
  participantCount: number;
}

const Comment = ({ comments, participantCount }: CommentProps) => {
  return (
    <>
      <Container>
        <WinnerCount>참여자 {participantCount}</WinnerCount>
        <CrawlingTime />
      </Container>
      <Container2>
        {comments.length > 0 ? (
          comments.map((item, index) => (
            <Winner
              key={index}
              title={item.author}
              comment={item.commentText}
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
  margin-bottom: 30px;
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
