import { COLORS } from '@/theme';
import styled from 'styled-components';

export const SubjectiveWrapper = styled.div`
  textarea {
    font-size: 1rem;
    min-height: 20px;
    outline: none;
    resize: none;
    overflow: hidden;
    border: none;
    border-bottom: 1px solid ${COLORS.Gray4};
    padding: 0.5rem 0.75rem 0;
    &::placeholder {
      font-size: 1rem;
      font-weight: 400;
      color: ${COLORS.Gray3};
    }
  }
`;
