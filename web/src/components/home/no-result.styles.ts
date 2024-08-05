import { COLORS } from '@/theme';
import styled from 'styled-components';

export const NoResultWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding-bottom: 5rem;

  p {
    color: ${COLORS.Gray2};
    font-size: 0.875rem;
  }

  .no-result-img {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .new-event {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .title {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      img {
        width: 1rem;
        height: 1rem;
      }
    }

    p {
      font-size: 0.75rem;
      color: ${COLORS.Gray2};
    }
  }
`;

export const MyEventText = styled.span<{ $myEventText: string }>`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ $myEventText }) => $myEventText};
`;
