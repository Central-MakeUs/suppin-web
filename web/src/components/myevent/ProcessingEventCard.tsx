import styled from 'styled-components';
import chain from '../../assets/chain.png';
import mainCard2 from '../../assets/main_card2.png';
import mainCard from '../../assets/main_card.png';
import Tag from '../common/Tags';
import { COLORS } from '@/theme';
import { body5Style, body6Style, head4Style } from '@/styles/global-styles';
import { EventOrServey, EventStatus, EventType } from '@/types/event';

const ProcessingEventCard = ({ event }: { event: EventType }) => {
  return (
    <ProcessingCardWrapper $eventType={event.type} $eventStatus={event.status}>
      <HeaderContainer>
        <CardHeader>
          <EventTypeWrapper $eventType={event.type}>
            {/* 타입 태그 */}
            <Tag
              label={event.type === 'COMMENT' ? '댓글 수집형' : '설문형'}
              $variant={'default'}
            />
          </EventTypeWrapper>
          <EventCount>
            {event.type === 'COMMENT' ? '수집 댓글 수' : '응답자 수'} |{' '}
            {event.commentCount}
          </EventCount>
        </CardHeader>
        {event.type === 'SURVEY' && (
          <EventLinkContainer>
            <Copy src={chain} />
            <EventLink>링크 복사하기</EventLink>
          </EventLinkContainer>
        )}
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
    </ProcessingCardWrapper>
  );
};

export default ProcessingEventCard;

const getBackgroundImage = (
  $eventType: EventOrServey,
  $eventStatus: EventStatus
) => {
  return $eventType === 'COMMENT' ? mainCard2 : mainCard;
};

const ProcessingCardWrapper = styled.div.attrs<{
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
  background-size: cover;
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

const EventTypeWrapper = styled.div<{ $eventType: EventOrServey }>`
  color: ${({ $eventType }) =>
    $eventType === 'COMMENT' ? COLORS.Sub1 : COLORS.Main};
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

const EventLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1px;
  width: 95px;
  height: 26px;
  border-radius: 5px;
  background-color: ${COLORS.Gray6};
  color: ${COLORS.Gray2};
  margin-left: 60px;
`;

const Copy = styled.img`
  width: 16px;
`;
const EventLink = styled.div`
  ${body5Style}
  color: ${COLORS.Gray2};
  text-align: right;
  cursor: pointer;
`;
