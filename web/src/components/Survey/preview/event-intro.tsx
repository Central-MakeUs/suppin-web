import calendarIcon from '@/assets/calander.png';
import { Box } from '@/components/common/box';
import { CreateEventPayload } from '@/types/event';
import { EventIntroWrapper } from './event-intro.styles';

export const EventIntro = () => {
  const event = JSON.parse(
    sessionStorage.getItem('event') as string
  ) as unknown as CreateEventPayload;

  return (
    <EventIntroWrapper>
      <Box className="box">
        <div className="info">
          <h1>{event?.title}</h1>
          <div className="policy">{event?.description}</div>
        </div>
        <Box className="date">
          <div className="calendar">
            <img src={calendarIcon} alt="calendar" className="icon" />
          </div>
          <div className="date-detail">
            <span>이벤트 진행 기간</span>
            <div className="date-number">
              {event?.startDate} ~ {event?.endDate}
            </div>
          </div>
          <div className="date-detail">
            <span>당첨자 발표일</span>
            <div className="date-number">{event?.announcementDate}</div>
          </div>
        </Box>
      </Box>
    </EventIntroWrapper>
  );
};
