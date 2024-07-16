import { COLORS } from '@/theme';
import styled from 'styled-components';

export const BtnMainInactive = () => {
  return (
    <Btn>
      <Login>로그인</Login>
    </Btn>
  );
};

export const BtnMainActive = () => {
  return (
    <Btn1>
      <Login>로그인</Login>
    </Btn1>
  );
};

const Btn = styled.button`
  width: 350px;
  height: 50px;
  background-color: ${COLORS.Gray3};
  border: none;
  border-radius: 10px;
`;

const Btn1 = styled.button`
  width: 350px;
  height: 50px;
  background-color: ${COLORS.Main};
  border: none;
  border-radius: 10px;
`;

const Login = styled.h4`
  color: ${COLORS.white};
`;
