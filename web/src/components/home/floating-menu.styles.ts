import { COLORS } from '@/theme';
import styled from 'styled-components';

export const FloatingMenuWrapper = styled.div`
  position: fixed;
  bottom: 6.5rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 999;

  .box-wrapper {
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    width: 8.75rem;
    height: 2.625rem;
    padding: 0.625rem 1.5rem;

    img {
      width: 1rem;
      height: 1rem;
    }
    p {
      font-size: 0.875rem;
      font-size: 600;
      color: ${COLORS.Gray2};
    }
  }
`;
