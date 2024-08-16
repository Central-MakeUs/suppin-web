import { EventStatus, EventType } from '@/types/event';
import styled from 'styled-components';
import { DoneEventCard, ProcessingEventCard } from '../myevent';

interface EventListProps {
  events: EventType[];
  status: EventStatus;
}

const EventList = ({ events, status }: EventListProps) => {
  return (
    <EventListWrapper>
      {events.map(event =>
        status === 'PROCESSING' ? (
          <ProcessingEventCard key={event.eventId} event={event} />
        ) : (
          <DoneEventCard key={event.eventId} event={event} />
        )
      )}
    </EventListWrapper>
  );
};

export default EventList;

const EventListWrapper = styled.div`
  padding: 32px 20px;
`;
