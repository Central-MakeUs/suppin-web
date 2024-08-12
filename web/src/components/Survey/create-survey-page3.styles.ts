import { COLORS } from '@/theme';
import styled from 'styled-components';

export const CreateSurveyPageContainer = styled.main``;

export const CreateSurveyPageHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  padding: 0 1.25rem;
  margin-top: 0.625rem;

  .progress {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 1.5rem;
  }

  .header {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 400;
    margin-bottom: 0.75rem;
  }
`;

export const CreateSurveyPageContent = styled.section`
  height: 100%;
  background-color: ${COLORS.Sub2};
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .box {
    background-color: ${COLORS.white};
    box-shadow: 0px 0px 4px 0px #00000040;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    .box-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
