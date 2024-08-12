import { COLORS } from '@/theme';
import styled from 'styled-components';

export const ChoiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.125rem;

  .text {
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid ${COLORS.Gray4};
    color: ${COLORS.Gray1};
    &::placeholder {
      font-size: 1rem;
      font-weight: 400;
      color: ${COLORS.Gray3};
    }
  }

  .question-list {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    .box {
      position: relative;
      display: flex;
      align-items: center;
      background: ${COLORS.Gray6};
      padding: 0.75rem 0.875rem;

      input {
        border: none;
        font-size: 0.875rem;
        color: ${COLORS.Gray1};
        ::placeholder {
          font-size: 0.875rem;
          color: ${COLORS.Gray3};
        }
      }
      svg {
        position: absolute;
        top: 50%;
        right: 1rem;
        transform: translateY(-50%);
        cursor: pointer;
      }
    }
  }

  .plus {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 0.75rem;
    color: ${COLORS.Gray2};
    text-decoration: underline;
    padding: 0.625rem;
    cursor: pointer;
  }
`;
