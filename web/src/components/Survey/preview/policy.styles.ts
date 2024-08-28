import { COLORS } from '@/theme';
import styled from 'styled-components';

export const PolicyWrapper = styled.div`
  .box {
    display: flex;
    flex-direction: column;
    gap: 1.625rem;
    background-color: ${COLORS.white};
    border-radius: 10px;
    padding: 36px 20px;
    box-shadow: 0px 0px 4px 0px #00000040;

    .policy div {
      color: ${COLORS.Gray2};
      font-weight: 400;
      font-size: 0.875rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .btns {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .agree {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: flex-start;
        gap: 10px;
        height: 46px;
        background-color: ${COLORS.Gray6};
        border: 1px solid ${COLORS.Gray5};

        img {
          width: 22px;
          height: 22px;
        }
      }
    }
  }
`;
