import { COLORS } from '@/theme';
import styled from 'styled-components';

export const StyledInput = styled.input`
  display: flex;
  height: 2.5rem;
  width: 100%;
  /* border-radius: 0.375rem; */
  border: 1px solid ${COLORS.Gray4};
  background-color: transparent;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  color: ${COLORS.Gray1};

  &::file-selector-button {
    border: 0;
    background-color: transparent;
    font-size: 0.875rem;
    font-weight: 500;
  }

  &::placeholder {
    color: ${COLORS.Gray3};
  }

  &:focus-visible {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
