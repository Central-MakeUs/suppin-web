import { COLORS } from '@/theme';
import styled from 'styled-components';

export const CreateSurveyPageWrapper = styled.main`
  height: 100%;
  overflow-y: hidden;
`;

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
    font-weight: 600;
    margin-bottom: 0.75rem;
  }
`;

export const CreateSurveyPageContent = styled.section`
  height: 100%;
  background-color: ${COLORS.Sub2};
  padding: 1.25rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
  }

  .box {
    background-color: ${COLORS.white};
    box-shadow: 0px 0px 4px 0px #00000040;
    padding: 1.25rem 1.125rem;

    .input {
      border: none;
      border-bottom: 1px solid ${COLORS.Gray5};
      padding-bottom: 0.75rem;
      font-size: 1.25rem;

      &::placeholder {
        font-size: 1.25rem;
        font-weight: 500;
        color: ${COLORS.Gray3};
      }
    }

    .textarea {
      border: none;
      font-size: 1rem;

      &::placeholder {
        font-weight: 400;
        color: ${COLORS.Gray3};
      }
    }

    label {
      color: ${COLORS.Gray2};
      font-size: 0.875rem;
      font-size: 400;
      margin-bottom: 0.625rem;
    }

    .date-container {
      height: 2.875rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: ${COLORS.Gray6};
      border: 1px solid ${COLORS.Gray5};
      border-radius: 10px;
      padding: 0.5rem 0.75rem;
    }
  }

  .button {
    width: 100%;
    margin-top: 1rem;
    font-weight: 600;
  }
`;
