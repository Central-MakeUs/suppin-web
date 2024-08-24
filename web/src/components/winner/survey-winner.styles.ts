import { COLORS } from '@/theme';
import styled from 'styled-components';

export const SurveyWinnerWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    .winner-count {
      margin-top: 0.75rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 2rem;
      background-color: ${COLORS.Sub2};

      .winner-count-header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h2 {
          font-size: 1rem;
          color: ${COLORS.Main};
          font-weight: 400;
        }
        p {
          font-size: 0.75rem;
          color: ${COLORS.Gray3};
        }
      }
      .input {
        border: 1px solid #215bfb80;
        border-radius: 10px;
        padding: 0.75rem 1rem;
        background-color: ${COLORS.white};
      }
    }

    .date {
      display: flex;
      flex-direction: column;
      gap: 0.625rem;
      padding: 0 2rem;

      h2 {
        font-weight: 500;
        font-size: 1rem;
        color: ${COLORS.Gray1};
      }
      p {
        font-size: 0.75rem;
        font-weight: 400;
        color: ${COLORS.Gray2};
      }
    }
    .date-container {
      height: 2.875rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: ${COLORS.Gray5};
      border: 1px solid ${COLORS.Gray5};
      border-radius: 10px;
      padding: 0.5rem 0.75rem;
    }

    .min-len {
      display: flex;
      flex-direction: column;
      gap: 0.625rem;
      padding: 0 2rem;

      h2 {
        font-weight: 500;
        font-size: 1rem;
        color: ${COLORS.Gray1};
      }
      p {
        font-size: 0.75rem;
        font-weight: 400;
        color: ${COLORS.Gray2};
      }

      .input {
        border-color: ${COLORS.Gray5};
        border-radius: 10px;
        padding: 0.75rem 1rem;
        background-color: ${COLORS.Gray6};
      }
    }

    .keyword {
      display: flex;
      flex-direction: column;
      gap: 0.625rem;
      padding: 0 2rem;

      h2 {
        font-weight: 500;
        font-size: 1rem;
        color: ${COLORS.Gray1};
      }
      p {
        font-size: 0.75rem;
        font-weight: 400;
        color: ${COLORS.Gray2};
      }

      .keyword-input {
        display: flex;
        align-items: center;

        .input {
          border-color: ${COLORS.Gray5};
          border-radius: 10px;
          padding: 0.75rem 1rem;
          background-color: ${COLORS.Gray6};
        }
        button {
          min-width: 4rem;
          border-radius: 10px;
        }
      }
    }
  }
`;

export const BadgeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 0.625rem;
  gap: 0.625rem;
`;

export const Badge = styled.div`
  background-color: #e9efff;
  color: ${COLORS.Main};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.875rem;
  border-radius: 0.375rem;
  border: none;
  padding: 0.5rem 1rem;
  text-transform: capitalize;
  font-size: 0.75rem;
  svg {
    height: 0.75rem;
    width: 0.75rem;
  }
`;
