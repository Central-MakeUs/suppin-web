import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { setId, setPassword } from '@/store/loginSlice';
import { COLORS } from '@/theme';

// img
import logo from '@/assets/logo.svg';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const { id, password } = useSelector((state: RootState) => state.login);

  // id, pwd가 모두 입력되었을때 버튼의 backgroundColor이 활성화 됨
  const isActive = id !== '' && password !== '';

  return (
    <Container>
      <Logo src={logo} alt="Logo" />
      <Input
        placeholder="아이디"
        value={id}
        onChange={e => dispatch(setId(e.target.value))}
      />
      <Input
        placeholder="비밀번호"
        type="password"
        value={password}
        onChange={e => dispatch(setPassword(e.target.value))}
      />
      <Button isActive={isActive}>로그인</Button>
      <LinkContainer>
        <LinkButton>비밀번호 찾기</LinkButton>
        <Divider>|</Divider>
        <LinkButton>아이디 찾기</LinkButton>
        <Divider>|</Divider>
        <SignUpButton>회원가입</SignUpButton>
      </LinkContainer>
    </Container>
  );
};

export default HomePage;

// 스타일 컴포넌트 정의
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Logo = styled.img`
  margin-bottom: 69px;
`;

const Input = styled.input`
  width: 350px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid ${COLORS.Gray4};
  padding: 0 10px;
  margin-bottom: 14px;
`;

const Button = styled.button<{ isActive: boolean }>`
  width: 350px;
  height: 50px;
  border-radius: 10px;
  border: none;
  margin-top: 12px;
  background-color: ${props => (props.isActive ? COLORS.Main : COLORS.Gray3)};
  color: #fff;
  font-weight: bold;
  cursor: ${props =>
    props.isActive ? 'pointer' : 'not-allowed'}; // 활성화 시 클릭 가능
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 14px;
`;

const LinkButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${COLORS.Gray3};
  &:hover {
    text-decoration: underline;
  }
`;

const SignUpButton = styled(LinkButton)`
  font-weight: 700;
  color: ${COLORS.Gray2};
`;

const Divider = styled.span`
  margin: 0 10px;
  color: ${COLORS.Gray4};
`;
