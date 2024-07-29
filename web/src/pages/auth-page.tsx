import { SignUp } from '@/components/auth/sign-up';
import { WebviewWrapper } from './root.styles';

const AuthPage = () => {
  return (
    <WebviewWrapper>
      <SignUp />
    </WebviewWrapper>
  );
};

export default AuthPage;
