import styled from 'styled-components';
import calander from '../../../assets/calander.png';
import { body5Style, body6Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';

export const EventPeriod = () => {
  return (
    <EventRow>
      <Icon src={calander} alt="calendar" />
      <Text>이벤트 기간</Text>
      <EventDate>2024. 6. 20 13:00 ~ 2024. 7. 01 17:00</EventDate>
    </EventRow>
  );
};

const EventRow = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  margin-right: 5px;
  width: 11px;
  height: 11px;
`;

const Text = styled.p`
  ${body5Style}
`;

const EventDate = styled.p`
  ${body6Style}
  color: ${COLORS.Gray2};
  margin-left: 14px;
`;
