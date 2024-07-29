// import { SignUp } from '@/components/auth/sign-up';
import { SignIn } from '@/components/auth/sign-in';
import { WebviewWrapper } from './root.styles';

const AuthPage = () => {
  return (
    <WebviewWrapper>
      {/* <SignUp /> */}
      <SignIn />
    </WebviewWrapper>
  );
};

export default AuthPage;
