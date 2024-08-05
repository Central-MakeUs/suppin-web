import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { WebviewWrapper } from '@/pages/root.styles';
import { SignUp1 } from './sign-up1';
import { SignUp2 } from './sign-up2';
import { SignUp3 } from './sign-up3';

const SignUp = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');

  useEffect(() => {
    if (!page) {
      setSearchParams({ page: '1' });
    }
  }, [page, setSearchParams]);

  return (
    <WebviewWrapper>
      {page === '1' && <SignUp1 />}
      {page === '2' && <SignUp2 />}
      {page === '3' && <SignUp3 />}
    </WebviewWrapper>
  );
};

export default SignUp;
