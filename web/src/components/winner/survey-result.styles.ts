import { COLORS } from '@/theme';
import styled from 'styled-components';

export const SurveyResultWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding: 1.25rem 1.5rem;

  .date {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${COLORS.Sub3};
    border: 1px solid ${COLORS.Sub2};
    border-radius: 100px;
    padding: 12px 15px;
    font-size: 0.875rem;
    color: ${COLORS.Gray2};
  }

  .select-trigger {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: flex-end;
    gap: 8px;
    color: ${COLORS.Gray2};
    font-size: 0.875rem;
    padding: 10px 14px;
    border: 1px solid ${COLORS.Gray5};
    border-radius: 10px;
    margin-top: 0.5rem;
  }
`;
