import { COLORS } from '@/theme';
import styled from 'styled-components';

export const FloatingButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 1.5rem;
  right: 1rem;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  background: ${COLORS.Main};
`;
