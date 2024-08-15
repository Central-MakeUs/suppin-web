import { axiosInstance } from '@/services/axios-instance';

interface createCommentEvent {
  type: string;
  title: string;
  description: string;
  url: string;
  startDate: string;
  endDate: string;
  announcementDate: string;
}

// 1. 이벤트 생성
export const createCommentEvent = async (payload: createCommentEvent) => {
  const { data } = await axiosInstance.post(
    '/events/new/comment/crawling',
    payload,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  );
  console.log(data);
  return data;
};

// 2. 유튜브 댓글 크롤링
export const youtubeCrawling = async (
  url: string,
  eventId: number,
  forceUpdate: boolean
) => {
  const { data } = await axiosInstance.post(
    `/event/crawling/comments`,
    null, // POST 요청의 본문이 없으므로 null 전달
    {
      params: {
        url,
        eventId,
        forceUpdate,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  );
  return data;
};

interface GetCommentsParams {
  eventId: number;
  url: string;
  page: number;
  size: number;
}

export const getCommentsList = async ({
  eventId,
  url,
  page,
  size,
}: GetCommentsParams) => {
  const { data } = await axiosInstance.get('/event/comments/list', {
    params: {
      eventId,
      url,
      page,
      size,
    },
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  console.log(data);
  return data;
};

// 조건별 당첨자 추첨 API
interface DraftWinnersPayload {
  eventId: number;
  winnerCount: number;
  minLength: number;
  startDate: string;
  endDate: string;
  keywords: string[];
}

export const draftWinners = async (payload: DraftWinnersPayload) => {
  const response = await axiosInstance.post(
    '/event/comments/draft-winners',
    payload,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json;charset=UTF-8',
      },
    }
  );
  return response.data;
};

// 유튜브 크롤링 중복 API
export const checkUrlDuplicate = async (url: string) => {
  const { data } = await axiosInstance.get('/event/comments/checkUrl', {
    params: { url },
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return data;
};
