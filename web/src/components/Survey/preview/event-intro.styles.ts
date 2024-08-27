import { COLORS } from '@/theme';
import styled from 'styled-components';

export const EventIntroWrapper = styled.div`
  .box {
    display: flex;
    flex-direction: column;
    gap: 1.625rem;
    background-color: ${COLORS.white};
    border-radius: 10px;
    padding: 36px 20px;
    box-shadow: 0px 0px 4px 0px #00000040;

    .info {
      display: flex;
      flex-direction: column;
      gap: 26px;

      h1 {
        color: ${COLORS.Gray1};
        font-weight: 500;
        font-size: 1.5rem;
      }
      .policy div {
        color: ${COLORS.Gray2};
        font-weight: 400;
        font-size: 0.875rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
    }

    .date {
      border-radius: 10px;
      background-color: ${COLORS.Gray6};
      padding: 20px 16px;
      display: flex;
      flex-direction: column;
      gap: 10px;

      .calendar {
        position: relative;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background-color: ${COLORS.Gray4};
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .icon {
        position: absolute;
        height: 0.875rem;
        width: 0.875rem;
        margin-bottom: 0.125rem;
      }

      .date-detail {
        display: flex;
        flex-direction: column;
        gap: 4px;
        color: ${COLORS.Gray2};
        font-size: 0.875rem;
      }
    }
  }
`;
