import commentComplete from '@/assets/commentComplete.png';
import { Popup } from '@/components/common/Popup';
import { SingleDatePicker } from '@/components/common/SingleDatePicker';
import { Subtitle } from '@/components/common/Subtitle';
import { SurveyTimeInput } from '@/components/common/SurveyTimeInput';
import {
  checkUrlDuplicate,
  createCommentEvent,
  youtubeCrawling,
} from '@/services/apis/crawling.service';
import { RootState } from '@/store';
import { setEventId, setUrl } from '@/store/winner';
import { body2Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 훅
import { toast } from 'sonner'; // 알림 메시지를 표시하는 라이브러리
import styled from 'styled-components';
// import { AskPopup } from '@/components/common/Ask_Popup';
import { BarLoader } from '@/components/common/loader';
import {
  selectCommentCount,
  selectIsDuplicateUrl,
  selectIsPopupVisible,
  setCommentCount,
  setIsDuplicateUrl,
  setIsPopupVisible,
} from '@/store/collect';
import { useDispatch, useSelector } from 'react-redux';

export const CollectCommentsPage = () => {
  const dispatch = useDispatch(); // Redux store에 액션을 디스패치하기 위한 훅

  const [isLoading, setIsLoading] = useState(false); // 스피너 활성화 상태 관리

  // 로컬 상태 관리: 유튜브 URL, 이벤트 제목, 설명을 로컬 상태로 관리하고, 이 값들은 로컬 스토리지에 저장됨.
  const [youtubeUrl, setYoutubeUrl] = useState(
    localStorage.getItem('youtubeUrl') || ''
  );
  const [eventTitle, setEventTitle] = useState(
    localStorage.getItem('eventTitle') || ''
  );
  const [eventDescription, setEventDescription] = useState(
    localStorage.getItem('eventDescription') || ''
  );

  // Redux에서 가져온 상태값: 팝업 표시 여부, 댓글 수, URL 중복 여부
  const isPopupVisible = useSelector(selectIsPopupVisible);
  const commentCount = useSelector(selectCommentCount);
  const isDuplicateUrl = useSelector(selectIsDuplicateUrl);

  // Redux에서 가져온 날짜 상태
  const startDate = useSelector((state: RootState) => state.dates.startDate);
  const endDate = useSelector((state: RootState) => state.dates.endDate);
  const announcementDate = useSelector(
    (state: RootState) => state.dates.announcementDate
  );

  const navigate = useNavigate(); // 페이지 이동을 위한 훅
  const eventId = localStorage.getItem('eventId'); // 이벤트 ID를 로컬스토리지에서 가져옴

  // 상태가 변경될 때마다 로컬스토리지에 저장: youtubeUrl, eventTitle, eventDescription
  useEffect(() => {
    localStorage.setItem('youtubeUrl', youtubeUrl);
  }, [youtubeUrl]);

  useEffect(() => {
    localStorage.setItem('eventTitle', eventTitle);
  }, [eventTitle]);

  useEffect(() => {
    localStorage.setItem('eventDescription', eventDescription);
  }, [eventDescription]);

  // 댓글 수집 결과를 확인하는 페이지로 이동하는 함수
  const handleCheckComments = () => {
    dispatch(setIsPopupVisible(false)); // 팝업 닫을 때 상태 초기화
    navigate('/crawling', {
      state: {
        eventId,
        url: youtubeUrl,
      },
    });
  };

  // 버튼 활성화 여부 판단: 필수 필드들이 모두 채워졌는지와 URL 중복 여부를 확인
  const isButtonEnabled =
    !!youtubeUrl &&
    !!eventTitle &&
    !!eventDescription &&
    !!startDate &&
    !!endDate &&
    !!announcementDate &&
    !isDuplicateUrl;

  // 이벤트 생성 및 댓글 수집 요청을 처리하는 함수
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
      startDate,
      endDate,
      announcementDate,
    };

    try {
      const response = await createCommentEvent(eventPayload); // 이벤트 생성 API 요청

      console.log(response);
      console.log(response.data.title);

      const eventId = response.data.eventId;
      localStorage.setItem('eventId', eventId); // 생성된 이벤트 ID를 로컬스토리지에 저장

      dispatch(setEventId(eventId)); // Redux 상태 업데이트
      dispatch(setUrl(response.data.url));
      toast.success('이벤트 생성 성공!');

      setIsLoading(true); // 스피너 활성화

      const crawlingResult = await youtubeCrawling(youtubeUrl, eventId, false); // 댓글 크롤링 API 요청
      dispatch(setCommentCount(crawlingResult.data.totalCommentCount));
      dispatch(setIsPopupVisible(true)); // 팝업을 표시하기 위한 상태 업데이트
    } catch (error) {
      toast.error(
        '이벤트 생성 및 댓글 수집에 실패했습니다. 다시 시도해주세요.'
      );
    } finally {
      setIsLoading(false); // 스피너 비활성화
    }
  };

  // URL 중복 여부를 확인하는 함수
  const handleUrlCheck = async () => {
    try {
      const response = await checkUrlDuplicate(youtubeUrl);

      if (response.data === '수집 이력이 없습니다.') {
        toast.success('수집 이력이 없습니다.');
        dispatch(setIsDuplicateUrl(false)); // URL이 중복되지 않음을 상태에 반영
      } else if (response.data.includes('동일한 URL의 댓글을')) {
        toast.error('중복된 URL입니다!');
        dispatch(setIsDuplicateUrl(true)); // URL이 중복되었음을 상태에 반영
      } else {
        toast.info('예상치 못한 응답입니다. 다시 시도해주세요.');
        dispatch(setIsDuplicateUrl(false));
      }
    } catch (error) {
      toast.error('URL 확인에 실패했습니다. 다시 시도해주세요.');
      dispatch(setIsDuplicateUrl(true));
    }
  };

  return (
    <PageContainer>
      {isLoading && <BarLoader />}
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
            onChange={e => setYoutubeUrl(e.target.value)} // 입력 필드 변경 시 상태 업데이트
            style={{ width: 'calc(100% - 64px)' }}
          />
          <Confirm onClick={handleUrlCheck}>확인</Confirm>
        </UrlContainer>
        <Label>이벤트 제목</Label>
        <Input
          type="text"
          placeholder="이벤트 제목"
          value={eventTitle}
          onChange={e => setEventTitle(e.target.value)} // 입력 필드 변경 시 상태 업데이트
        />
        <Label>이벤트 설명</Label>
        <Input
          type="text"
          placeholder="이벤트 설명을 입력하세요"
          value={eventDescription}
          onChange={e => setEventDescription(e.target.value)} // 입력 필드 변경 시 상태 업데이트
        />
        <Label>이벤트 기간</Label>
        <SurveyTimeInput
          placeholderStart={'시작 날짜'}
          placeholderEnd={'종료 날짜'}
        />
        <Label>당첨자 발표일</Label>
        <SingleDatePicker placeholder={'날짜 선택'} />

        <ConfirmBtn $enabled={isButtonEnabled} onClick={handleSubmit}>
          댓글 수집하기
        </ConfirmBtn>
      </MainContent>
      {isPopupVisible && commentCount !== null && (
        <Popup
          title="알림"
          message={`댓글 총 ${commentCount}개를 불러왔습니다!`}
          onClose={handleCheckComments}
          imgSrc={commentComplete}
          width="177px"
          height="133px"
          text="수집된 댓글 확인하기"
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
