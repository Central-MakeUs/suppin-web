import { SignIn } from '@/components/auth/sign-in';
import SignUp from '@/components/auth/sign-up';
import { useUserInfo } from '@/services/queries/user.queries';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { WebviewWrapper } from './root.styles';

const AuthPage = () => {
  const router = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const authType = searchParams.get('authType');

  const { userInfo } = useUserInfo();

  if (!userInfo.isFetching && userInfo.data?.email) {
    router('/');
  }

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
