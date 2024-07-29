import { COLORS } from '@/theme';
import styled from 'styled-components';

export const SignupWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.25rem;

  .signup-header {
    position: relative;
    width: 100%;
    height: 2.875rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      position: absolute;
      height: 100%;
      width: 2.875rem;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      color: ${COLORS.Gray2};
    }
    h3 {
      font-size: 1.125rem;
      font-weight: 600;
      color: ${COLORS.Gray1};
    }
  }
  .form {
    height: 100%;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.625rem;

    .form-label {
      font-size: 0.875rem;
      font-weight: 600;
      color: ${COLORS.Gray2};
    }
    .form-item {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .form-username {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        color: ${COLORS.Main};
        font-size: 0.875rem;
        font-weight: 600;
        cursor: pointer;
      }
    }
    .form-input {
      padding: 1.5rem;
      border-radius: 10px;
    }
    .form-info {
      margin-top: 0.625rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      .form-info-box {
        display: flex;
        flex-direction: column;
        border: 1px solid ${COLORS.Gray4};
        border-radius: 10px;
      }
      .form-item {
        margin-bottom: 0;
        input {
          border-radius: 0;
        }
      }
    }
    .signup-btn {
      width: 100%;
    }
  }
`;
