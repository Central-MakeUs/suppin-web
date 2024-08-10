import { COLORS } from '@/theme';
import styled from 'styled-components';

export const StyledTextarea = styled.textarea`
  display: flex;
  min-height: 80px;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid ${COLORS.Gray4};
  background-color: transparent;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  color: ${COLORS.Gray1};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
