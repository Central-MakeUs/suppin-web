import { body5Style, body6Style, head4Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import styled from 'styled-components';
import chain from '../../assets/chain.png';
import mainCard from '../../assets/main_card.png';
import mainCard2 from '../../assets/main_card2.png';
import Tag from '../common/Tags';

const EventList = ({ events }) => {
  console.log('Events:', events);

  return (
    <EventListWrapper>
      {events.map(event => (
        <EventCard key={event.eventId} $eventType={event.type}>
          <HeaderContainer>
            <CardHeader>
              <EventType $eventType={event.type}>
                {event.type === 'COMMENT' ? (
                  <Tag label={'댓글 수집형'} $variant={'default'} />
                ) : (
                  <Tag label={'설문형'} $variant={'default'} />
                )}
              </EventType>
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
        </EventCard>
      ))}
    </EventListWrapper>
  );
};

export default EventList;

const EventListWrapper = styled.div`
  padding: 0px 20px;
  margin-top: 32px;
`;

const EventCard = styled.div<{ $eventType: string }>`
  padding: 20px;
  background-image: url(${({ $eventType }) =>
    $eventType === 'COMMENT' ? mainCard2 : mainCard});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-bottom: 16px;
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

const EventType = styled.div<{ $eventType: string }>`
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
