import { SigninType, SignupPayload } from '@/lib/schema/auth.schema';
import { deleteUser, signin, signup } from '@/services/apis/user.service';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export const useSignup = () => {
  const { mutateAsync: join, isPending: isSignupLoading } = useMutation({
    mutationFn: async (payload: SignupPayload) => await signup(payload),
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
    // 로그인 성공 시 token 저장 및 콘솔 출력
    onSuccess: data => {
      console.log(data); // 로그인 성공 시 응답 콘솔 출력
      if (data && data.data && data.data.token) {
        localStorage.setItem('token', data.data.token); // token을 로컬스토리지에 저장
      }
      // toast.success('로그인이 정상처리 되었습니다.');
    },
  });

  return {
    login,
    isSigninLoading,
  };
};

export const useDeleteUser = () => {
  const navigate = useNavigate();

  const { mutateAsync: deleteUserAccount, isPending: isDeleting } = useMutation(
    {
      mutationFn: async () => await deleteUser(),
      onError: error => {
        console.error('회원 탈퇴 에러:', error);
        toast.error('회원 탈퇴 중 오류가 발생했습니다, 다시 시도해주세요');
      },
      onSuccess: () => {
        toast.success('회원 탈퇴가 완료되었습니다.');
        localStorage.removeItem('token');
        navigate('/auth?authType=in');
      },
    }
  );

  return {
    deleteUserAccount,
    isDeleting,
  };
};
