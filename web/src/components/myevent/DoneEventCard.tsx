import {
  body3Style,
  body5Style,
  body6Style,
  head4Style,
} from '@/styles/global-styles';
import { COLORS } from '@/theme';
import styled from 'styled-components';
import Tag from '../common/Tags';
import mainCardBig from '../../assets/main_card_big.png';
import mainCardBig2 from '../../assets/main_card_big2.png';
import mainCard2 from '../../assets/main_card2.png';
import mainCard from '../../assets/main_card.png';
import { EventOrServey, EventStatus, EventType } from '@/types/event';

import { useNavigate } from 'react-router-dom';

const DoneEventCard = ({ event }: { event: EventType }) => {
  const navigate = useNavigate();

  const handleWinnerClick = () => {
    if (event.status === 'DONE') {
      navigate(`/crawling/${event.eventId}`); // 해당 eventId를 사용하여 이동
    }
  };

  return (
    <DoneCardWrapper $eventType={event.type} $eventStatus={event.status}>
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
            {event.commentCount}
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
        <ActionButton onClick={handleWinnerClick}>당첨자 확인하기</ActionButton>
      )}
    </DoneCardWrapper>
  );
};

export default DoneEventCard;

const getBackgroundImage = (
  $eventType: EventOrServey,
  $eventStatus: EventStatus
) => {
  if ($eventStatus === 'DONE') {
    return $eventType === 'COMMENT' ? mainCardBig2 : mainCardBig;
  } else {
    return $eventType === 'COMMENT' ? mainCard2 : mainCard;
  }
};

const DoneCardWrapper = styled.div.attrs<{
  $eventType: EventOrServey;
  $eventStatus: EventStatus;
}>(({ $eventType, $eventStatus }) => ({
  style: {
    backgroundImage: `url(${getBackgroundImage($eventType, $eventStatus)})`,
  },
}))<{ $eventType: EventOrServey; $eventStatus: EventStatus }>`
  padding: 20px;
  margin-bottom: 16px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
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
