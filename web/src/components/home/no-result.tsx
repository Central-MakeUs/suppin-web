import commentImg from '@/assets/comment.png';
import noResultImg from '@/assets/no-result.svg';
import surveyImg from '@/assets/survey.png';
import { Box } from '@/components/common/box';
import { COLORS } from '@/theme';
import { MyEventText, NoResultWrapper } from './no-result.styles';

export const NoResult = () => {
  return (
    <NoResultWrapper>
      <div className="no-result-img">
        <img src={noResultImg} alt="no-result" />
        <p>
          + 버튼을 눌러 새로운
          <br />
          이벤트를 생성해주세요
        </p>
      </div>
      <div className="new-event">
        <Box>
          <div className="title">
            <img src={surveyImg} alt="survey" />
            <MyEventText $myEventText={COLORS.Main}>설문 생성하기</MyEventText>
          </div>
          <p>이벤트가 시작되기 전에 설문을 만들어서 활용해요</p>
        </Box>
        <Box>
          <div className="title">
            <img src={commentImg} alt="comment" />
            <MyEventText $myEventText={COLORS.Sub1}>댓글 수집하기</MyEventText>
          </div>
          <p>이벤트가 종료된 시점에 이벤트 게시글의 댓글을 수집해 보세요</p>
        </Box>
      </div>
    </NoResultWrapper>
  );
};
