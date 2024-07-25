import { css } from 'styled-components';

export const labelStyle = css`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
