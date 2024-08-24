import { COLORS } from '@/theme';
import styled from 'styled-components';

export const FloatingButtonWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 1.5rem;
  right: 1rem;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  background: ${COLORS.Main};
  z-index: 998;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
