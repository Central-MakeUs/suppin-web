import { COLORS } from '@/theme';
import styled from 'styled-components';

export const SubjectiveWrapper = styled.div`
  .box {
    display: flex;
    flex-direction: column;
    gap: 1.625rem;
    background-color: ${COLORS.white};
    border-radius: 10px;
    padding: 36px 20px;
    box-shadow: 0px 0px 4px 0px #00000040;

    .data {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      textarea {
        border-color: ${COLORS.Sub2};
        &::placeholder {
          color: ${COLORS.Gray2};
          font-size: 0.875rem;
        }
      }
    }
  }
`;
