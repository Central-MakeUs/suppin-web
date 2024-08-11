import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '@/store';
import { Popup } from '@/components/common/Popup';
import { Subtitle } from '@/components/common/Subtitle';
import { SurveyTimeInput } from '@/components/common/SurveyTimeInput';
import { SingleDatePicker } from '@/components/common/SingleDatePicker';
import { body2Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import {
  createCommentEvent,
  youtubeCrawling,
} from '@/services/apis/crawling.service';
import { toast } from 'sonner';
import commentComplete from '@/assets/commentComplete.png';
import { AskPopup } from '@/components/common/Ask_Popup';

export const CollectCommentsPage = () => {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [commentCount, setCommentCount] = useState<number | null>(null);
  const [forceUpdate, setForceUpdate] = useState(false);
  const [showAskPopup, setShowAskPopup] = useState(false);

  const startDate = useSelector((state: RootState) => state.dates.startDate);
  const endDate = useSelector((state: RootState) => state.dates.endDate);
  const announcementDate = useSelector(
    (state: RootState) => state.dates.announcementDate
  );

  const handlePopupToggle = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const isButtonEnabled =
    !!youtubeUrl &&
    !!eventTitle &&
    !!eventDescription &&
    !!startDate &&
    !!endDate &&
    !!announcementDate;

  const handleSubmit = async () => {
    if (!isButtonEnabled) {
      toast.error('모든 필드를 입력해주세요.');
      return;
    }

    const eventPayload = {
      type: 'COMMENT',
      title: eventTitle,
      description: eventDescription,
      url: youtubeUrl,
      startDate: startDate,
      endDate: endDate,
      announcementDate: announcementDate,
    };

    console.log(eventPayload);

    try {
      // 첫 번째 API 호출: 이벤트 생성
      const response = await createCommentEvent(eventPayload);
      const eventId = localStorage.setItem('eventId', response.data.eventId);
      setCommentCount(response.data.commentCount); // 댓글 수 상태에 저장
      toast.success('이벤트 생성 성공!');

      // 두 번째 API 호출 준비: 유튜브 크롤링
      setShowAskPopup(true); // 두 번째 팝업을 보여주기 위해 상태 변경
    } catch (error) {
      toast.error('이벤트 생성에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleCrawling = async (confirmForceUpdate: boolean) => {
    setShowAskPopup(false); // 팝업 닫기
    try {
      const eventId = localStorage.getItem('eventId'); // eventId를 받아옴
      // 유튜브 크롤링 API 호출
      const crawlingResult = await youtubeCrawling(
        youtubeUrl,
        eventId,
        confirmForceUpdate
      );
      console.log('크롤링 결과:', crawlingResult);
      setCommentCount(crawlingResult.commentCount); // 새로운 댓글 수 상태에 저장
      handlePopupToggle();
    } catch (error) {
      toast.error('댓글 수집에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <PageContainer>
      <Subtitle title="댓글 수집하기" />
      <MainContent>
        <Head>댓글 수집을 위한</Head>
        <Head>정보를 입력해주세요</Head>
        <Sub>현재까지 게시된 유튜브 댓글이 수집됩니다.</Sub>
        <Label>Youtube URL</Label>
        <UrlContainer>
          <Input
            type="text"
            placeholder="https://www.youtube.com/watch?v=example"
            value={youtubeUrl}
            onChange={e => setYoutubeUrl(e.target.value)}
            style={{ width: 'calc(100% - 64px)' }}
          />
          <Confirm>확인</Confirm>
        </UrlContainer>
        <Label>이벤트 제목</Label>
        <Input
          type="text"
          placeholder="이벤트 제목"
          value={eventTitle}
          onChange={e => setEventTitle(e.target.value)}
        />
        <Label>이벤트 설명</Label>
        <Input
          type="text"
          placeholder="이벤트 설명을 입력하세요"
          value={eventDescription}
          onChange={e => setEventDescription(e.target.value)}
        />
        <Label>이벤트 기간</Label>
        <SurveyTimeInput
          placeholderStart={'시작 날짜'}
          placeholderEnd={'종료 날짜'}
        />
        <Label>당첨자 발표일</Label>
        <SingleDatePicker placeholder={'날짜 선택'} />

        {showAskPopup && (
          <AskPopup
            comment={`동일한 URL의 댓글을 수집한 이력이 있습니다. \n 다시 수집하시겠습니까?`}
            text1="예"
            text2="아니오"
            onConfirm={() => handleCrawling(true)} // 강제 업데이트
            onCancel={() => handleCrawling(false)} // 강제 업데이트 안함
          />
        )}
        <ConfirmBtn $enabled={isButtonEnabled} onClick={handleSubmit}>
          댓글 수집하기
        </ConfirmBtn>
      </MainContent>
      {isPopupVisible && commentCount !== null && (
        <Popup
          title="알림"
          message={`댓글 총 ${commentCount}개를 불러왔습니다!`}
          onClose={handlePopupToggle}
          imgSrc={commentComplete}
          width="177px"
          height="133px"
        />
      )}
    </PageContainer>
  );
};

const PageContainer = styled.div``;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  padding: 0 20px;
`;

const Head = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Sub = styled.p`
  ${body2Style}
  color: ${COLORS.Gray1};
  margin-top: 6px;
`;

const Label = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${COLORS.Gray2};
  margin-bottom: 8px;
  margin-top: 22px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${COLORS.Gray5};
  border-radius: 10px;
  background-color: ${COLORS.Gray6};
  font-size: 16px;
  color: ${COLORS.Gray1};
`;

const UrlContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 11px;
`;

const Confirm = styled.button`
  width: 63px;
  height: 46px;
  border-radius: 10px;
  border: 1px solid ${COLORS.Main};
  background-color: white;
  color: ${COLORS.Main};
`;

interface NextButtonProps {
  $enabled: boolean;
}

const ConfirmBtn = styled.button<NextButtonProps>`
  width: 100%;
  background-color: ${props => (props.$enabled ? COLORS.Main : COLORS.Gray3)};
  height: 46px;
  border: none;
  color: white;
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  margin-top: 20px;
  cursor: ${props => (props.$enabled ? 'pointer' : 'not-allowed')};
`;
