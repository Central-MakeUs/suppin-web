import { Subtitle } from '@/components/common/Subtitle';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/common/tabs';
import Comment from '@/components/winner/Comment';
import { WinnerContent } from '@/components/winner/Winner';
import { WinnerResult } from '@/components/winner/WinnerResult';
import { getCommentsList } from '@/services/apis/crawling.service';
import { RootState } from '@/store';
import {
  setActiveTab,
  setComments,
  setParticipantCount,
  setPeriod,
  setShowWinnerResult,
  setTotalCommentCount,
} from '@/store/crawling';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import { HomePageWrapper } from './home-page.styles';

const CrawlingPage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  // 로컬 스토리지에서 이벤트 ID, URL, 이벤트 타이틀을 가져옴
  const eventId = localStorage.getItem('eventId');
  const url = localStorage.getItem('youtubeUrl');
  const eventTitle = localStorage.getItem('eventTitle');

  // Redux 스토어에서 상태를 가져옴
  const activeTab = useSelector((state: RootState) => state.crawling.activeTab);
  const comments = useSelector((state: RootState) => state.crawling.comments);
  const participantCount = useSelector(
    (state: RootState) => state.crawling.participantCount
  );
  const totalCommentCount = useSelector(
    (state: RootState) => state.crawling.totalCommentCount
  );
  const showWinnerResult = useSelector(
    (state: RootState) => state.crawling.showWinnerResult
  );

  // 컴포넌트가 처음 렌더링될 때 URL 쿼리 파라미터를 읽어와서 활성화된 탭을 설정
  useEffect(() => {
    const type = searchParams.get('type');
    if (type && (type === 'comment' || type === 'winner')) {
      dispatch(setActiveTab(type)); // Redux 상태에서 활성화된 탭을 설정
    } else {
      setSearchParams({ type: 'comment' }); // 기본적으로 댓글 탭을 활성화
    }
  }, [searchParams, setSearchParams, dispatch]);

  // 댓글 데이터를 가져오는 함수
  useEffect(() => {
    const fetchComments = async () => {
      if (!eventId || !url) return; // 이벤트 ID와 URL이 없으면 함수를 종료

      try {
        const response = await getCommentsList({
          eventId: parseInt(eventId, 10), // eventId를 숫자로 변환
          url,
          page: 1,
          size: 500, // 최대 500개의 댓글을 가져옴 (무한 스크롤 적용 전)
        });
        console.log(response);

        if (response.data.comments && response.data.comments.length > 0) {
          dispatch(setComments(response.data.comments)); // Redux 상태에 댓글 데이터를 저장
        }
        if (response.data.totalCommentCount !== totalCommentCount) {
          dispatch(setTotalCommentCount(response.data.totalCommentCount)); // 총 댓글 수를 업데이트
        }
        if (response.data.participantCount !== participantCount) {
          dispatch(setParticipantCount(response.data.participantCount)); // 참가자 수를 업데이트
        }
        dispatch(setPeriod(response.data.crawlTime)); // 크롤링 시간 데이터를 저장
      } catch (error) {
        console.error(error); // 에러 발생 시 콘솔에 출력
      }
    };

    fetchComments(); // 컴포넌트가 처음 렌더링될 때 댓글 데이터를 가져옴
  }, [eventId, url, dispatch, totalCommentCount, participantCount]);

  // 탭 변경 시 호출되는 함수
  const handleTabChange = useCallback(
    (value: string) => {
      dispatch(setActiveTab(value)); // Redux 상태에서 활성화된 탭을 변경
      setSearchParams({ type: value }); // URL 쿼리 파라미터를 변경하여 현재 탭을 반영
    },
    [setSearchParams, dispatch]
  );

  // 새로고침 방지 및 경고 메시지를 표시하는 함수
  useEffect(() => {
    // @ts-expect-error asdf
    const handleBeforeUnload = event => {
      event.preventDefault();
      event.returnValue = ''; // 브라우저에 경고 메시지를 표시
      toast.error('새로고침이 불가능합니다!'); // 경고 메시지를 표시
    };

    window.addEventListener('beforeunload', handleBeforeUnload); // 새로고침 이벤트를 감지하여 방지

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload); // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
    };
  }, []);
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };

  return (
    <HomePageWrapper>
      <Subtitle
        title={eventTitle}
        onBackClick={goHome}
        showBackButton={false}
      />
      <Tabs
        style={{ height: 'calc(100% - 6.375rem)' }}
        value={activeTab}
        onValueChange={handleTabChange}
      >
        <TabsList>
          <TabsTrigger value="comment">댓글 내용</TabsTrigger>
          <TabsTrigger value="winner">당첨자 선정</TabsTrigger>
        </TabsList>
        <TabsContent value="comment">
          <Comment
            eventId={eventId}
            url={url}
            comments={comments}
            participantCount={participantCount}
          />
        </TabsContent>

        <TabsContent value="winner">
          {showWinnerResult ? (
            <WinnerResult />
          ) : (
            <WinnerContent
              participantCount={participantCount}
              onWinnerSelected={() => dispatch(setShowWinnerResult(true))}
            />
          )}
        </TabsContent>
      </Tabs>
    </HomePageWrapper>
  );
};

export default CrawlingPage;
