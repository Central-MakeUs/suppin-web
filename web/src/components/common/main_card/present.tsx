import styled from 'styled-components';
import gift from '../../../assets/gift.png';
import { body5Style, body6Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';

export const EventPresent = () => {
  return (
    <EventRow>
      <Icon src={gift} alt="gift" />
      <Text>당첨자 발표</Text>
      <EventDate>2024. 7. 4 17:00</EventDate>
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
