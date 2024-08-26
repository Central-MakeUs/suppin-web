import { COLORS } from '@/theme';
import styled from 'styled-components';

export const PolicyWrapper = styled.div`
  .box {
    display: flex;
    flex-direction: column;
    gap: 1.625rem;

    .info {
      display: flex;
      flex-direction: column;
      gap: 1.75rem;

      h1 {
        color: ${COLORS.Gray1};
        font-weight: 500;
        font-size: 1.5rem;
      }
      .policy div {
        color: ${COLORS.Gray2};
        font-weight: 400;
        font-size: 0.875rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  }
`;
