import { COLORS } from '@/theme';
import styled from 'styled-components';

export const BarLoaderWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-content: center;
  padding: 1rem;
  z-index: 900;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;

  .bar-container {
    display: flex;
    gap: 4px;

    .bar {
      height: 4.5rem;
      width: 1rem;
      background: ${COLORS.Main};
    }
  }
`;

export const SpinLoaderWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .spinner {
    height: 90%;
    aspect-ratio: 1 / 1;
    border: 2px solid ${COLORS.Main};
    border-radius: 50%;
    border-top: transparent;
    border-left: transparent;
  }
`;
