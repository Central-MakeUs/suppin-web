import { COLORS } from '@/theme';
import { css } from 'styled-components';

export const tabsList = css`
  height: 2.5rem;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: ${COLORS.Gray1};
  position: relative;
`;

export const tabsTrigger = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 1rem;
  font-weight: 400;
  transition: all 0.3s;
  background: transparent;
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &[data-state='active'] {
    color: ${COLORS.Main};
  }
`;

export const tabsContent = css`
  margin-top: 0.5rem;
`;

export const animatedUnderline = css`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2.5px;
  background: ${COLORS.Main};
`;
