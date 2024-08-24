import { COLORS } from '@/theme';
import styled from 'styled-components';

export const ResultContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .header {
    position: relative;
    height: 2.75rem;
    display: flex;
    align-items: center;
    color: ${COLORS.Gray1};
    font-size: 1.125rem;
    justify-content: center;
    img {
      position: absolute;
      width: 2.75rem;
      height: 2.75rem;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
    }
  }
`;
