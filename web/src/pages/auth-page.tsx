import { SignIn } from '@/components/auth/sign-in';
import SignUp from '@/components/auth/sign-up';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { WebviewWrapper } from './root.styles';

const AuthPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const authType = searchParams.get('authType');

  useEffect(() => {
    if (!authType) {
      setSearchParams({ authType: 'in' });
    }
  }, []);

  return (
    <WebviewWrapper>
      {authType === 'in' ? <SignIn /> : <SignUp />}
    </WebviewWrapper>
  );
};

export default AuthPage;
