import { COLORS } from '@/theme';
import styled from 'styled-components';

export const SigninWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* gap: 2.5rem; */

  .logo {
    width: 7.75rem;
    height: 2.375rem;
    margin-bottom: 35px;
  }

  .form {
    width: 100%;
    display: flex;
    flex-direction: column;

    input {
      width: 100%;
      padding: 1.5rem;
      border-radius: 10px;
    }

    .signin-btn {
      width: 100%;
      font-weight: 600;
    }
  }

  .signin-config {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    color: ${COLORS.Gray3};

    span {
      height: 2rem;
      display: flex;
      align-items: end;
      justify-content: center;
    }

    .sep {
      width: 1px;
      height: 12.5px;
      background: ${COLORS.Gray3};
      margin: 0 12px;
    }

    .signup {
      align-items: center;
      color: ${COLORS.Gray2};
      font-weight: 600;
      margin-top: 16px;
    }
  }

  .contact {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    color: ${COLORS.Gray3};
    font-size: 14px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
