import { COLORS } from '@/theme';
import styled from 'styled-components';

export const SurveyQuestionItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid ${COLORS.Gray5};
  background-color: ${COLORS.white};
  padding: 20px 24px;

  h2 {
    color: ${COLORS.Gray1};
    font-size: 1rem;
    font-weight: 500;
  }

  .sep {
    background-color: ${COLORS.Gray4};
    height: 1px;
    width: 100%;
  }
`;
