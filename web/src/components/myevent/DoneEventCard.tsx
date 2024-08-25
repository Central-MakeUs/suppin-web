import {
  body3Style,
  body5Style,
  body6Style,
  head4Style,
} from '@/styles/global-styles';
import { COLORS } from '@/theme';
import { EventType } from '@/types/event';
import styled from 'styled-components';
import Tag from '../common/Tags';

import { useNavigate } from 'react-router-dom';

export const DoneEventCard = ({ event }: { event: EventType }) => {
  const navigate = useNavigate();

  const handleWinnerClick = () => {
    if (event.type === 'COMMENT') {
      navigate(`/crawling/${event.eventId}`); // 해당 eventId를 사용하여 이동
    }
  };

  return (
    <DoneCardWrapper>
      <div
        onClick={() => {
          if (event.type === 'SURVEY') {
            navigate(`/result/${event.eventId}?survey=${event.surveyId}`);
          }
        }}
      >
        <HeaderContainer>
          <CardHeader>
            <EventTypeWrapper>
              <Tag
                label={event.type === 'COMMENT' ? '댓글 수집형' : '설문형'}
                $variant={'default'}
              />
              {event.status === 'DONE' && (
                <Tag label={'당첨자 선정 완료'} $variant={'completed'} />
              )}
            </EventTypeWrapper>
            <EventCount>
              {event.type === 'COMMENT' ? '수집 댓글 수' : '응답자 수'} |{' '}
              {event.type === 'COMMENT'
                ? event.commentCount
                : event.surveyCount}
            </EventCount>
          </CardHeader>
        </HeaderContainer>
        <EventTitle>{event.title}</EventTitle>
        <EventDates>
          <EventContainer>
            <EventDate>이벤트 기간 </EventDate>
            <Date>
              {event.startDate} - {event.endDate}
            </Date>
          </EventContainer>
          <EventContainer>
            <EventDate>당첨자 발표</EventDate>
            <Date>{event.announcementDate}</Date>
          </EventContainer>
        </EventDates>
        {event.status === 'DONE' && (
          <ActionButton onClick={handleWinnerClick}>
            당첨자 확인하기
          </ActionButton>
        )}
      </div>
    </DoneCardWrapper>
  );
};

const DoneCardWrapper = styled.div`
  padding: 18px 20px;
  margin-bottom: 16px;
  box-shadow: 0px 0px 4px 0px #0000004d;
  border-radius: 15px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const EventTypeWrapper = styled.div`
  color: ${COLORS.Main};
  display: flex;
  gap: 4px;
`;

const EventCount = styled.div`
  color: ${COLORS.Gray2};
  ${body6Style}
`;

const EventTitle = styled.div`
  color: #181c49;
  ${head4Style}
  margin: 16px 0 10px 0px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${COLORS.Gray4};
`;

const EventDates = styled.div`
  color: ${COLORS.Gray2};
`;

const EventContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 14px;
`;

const EventDate = styled.div`
  ${body5Style}
  color:${COLORS.Gray2};
`;

const Date = styled.div`
  ${body6Style}
  color: ${COLORS.Gray2};
`;

const ActionButton = styled.button`
  width: 100%;
  margin-top: 16px;
  padding: 10px 20px;
  background-color: ${COLORS.Sub2};
  border: none;
  color: ${COLORS.Main};
  border-radius: 10px;
  ${body3Style}
  cursor: pointer;
`;
