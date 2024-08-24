import { COLORS } from '@/theme';
import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100%;
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
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .box {
    background-color: ${COLORS.white};
    box-shadow: 0px 0px 4px 0px #00000040;
    padding: 1.25rem 0.875rem;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    .box-header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        font-size: 0.75rem;
        color: ${COLORS.Main};
        cursor: pointer;
      }
    }

    .noti {
      h2 {
        font-weight: 500;
        font-size: 1rem;
        color: ${COLORS.Gray1};
        line-height: 25px;
      }
      p {
        font-weight: 400;
        font-size: 0.625rem;
        color: ${COLORS.Gray2};
      }
    }

    .desc-box {
      gap: 0;
      .desc {
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 22px;
        color: ${COLORS.Gray2};
        border: none;
        outline: none;
        resize: none;
        overflow: hidden;
        min-height: 20px;
      }
      .strong {
        font-weight: 600;
        font-size: 1rem;
        text-decoration: underline;
      }
    }

    .input-container {
      display: flex;
      flex-direction: column;
      gap: 0.625rem;

      .field-row {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;

        img {
          position: absolute;
          top: 50%;
          right: 10px;
          transform: translateY(-50%);
        }
      }
    }
    .add-input {
      font-weight: 600;
      font-size: 0.875rem;
      color: ${COLORS.Gray2};
      display: flex;
      align-items: center;
      justify-content: flex-end;
      text-decoration: underline;
    }
  }

  .button {
    width: 100%;
    margin-top: 1rem;
    font-weight: 600;
  }
`;
