import { COLORS } from '@/theme';
import styled from 'styled-components';

export const SignleDatePickerWrapper = styled.div`
  .date-box {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .calendar {
    width: 0.875rem;
    height: 0.875rem;
    margin-bottom: 0.25rem;
  }

  .react-datepicker__input-container {
    input {
      background: transparent;
      border: none;
      color: ${COLORS.Gray2};
      font-weight: 400;
      font-size: 0.875rem;
    }
  }

  .react-datepicker-popper {
    left: 50% !important;
    transform: translateX(-50%) !important;
    will-change: transform;
    margin-top: 1rem;
  }
  .react-datepicker__time-container {
    width: 100% !important;
  }
`;
