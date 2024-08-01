import { SigninType, SignupType } from '@/lib/schema/auth.schema';
import { signin, signup } from '@/services/apis/user.service';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useSignup = () => {
  const { mutateAsync: join, isPending: isSignupLoading } = useMutation({
    mutationFn: async (payload: SignupType) => await signup(payload),
    onError: error => {
      console.error('Signup error:', error);
      // @ts-expect-error no type
      if (error.response && error.response.data.errorMessage) {
        // @ts-expect-error no type
        toast.error(error.response.data.errorMessage);
        return;
      }
      toast.error('회원가입 중 오류가 발생했습니다, 다시 시도해주세요');
    },
  });

  return {
    join,
    isSignupLoading,
  };
};

export const useSignin = () => {
  const { mutateAsync: login, isPending: isSigninLoading } = useMutation({
    mutationFn: async (payload: SigninType) => await signin(payload),
    onError: error => {
      console.error('Signin error:', error);
      // @ts-expect-error no type
      if (error.response && error.response.data.errorMessage) {
        // @ts-expect-error no type
        toast.error(error.response.data.errorMessage);
        return;
      }
      toast.error('로그인 중 오류가 발생했습니다, 다시 시도해주세요');
    },
  });

  return {
    login,
    isSigninLoading,
  };
};
