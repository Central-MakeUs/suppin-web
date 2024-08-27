import { COLORS } from '@/theme';
import styled from 'styled-components';

export const PersonalWrapper = styled.div`
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
      gap: 24px;

      .input-container {
        display: flex;
        flex-direction: column;
        gap: 8px;

        .address {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          svg {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
          }
        }

        .input {
          height: 46px;
          border-color: ${COLORS.Gray4};
          border-radius: 10px;

          &::placeholder {
            font-size: 0.875rem;
            color: ${COLORS.Gray2};
          }
        }
      }
    }
  }
`;
