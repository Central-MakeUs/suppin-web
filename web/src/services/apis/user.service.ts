import { SigninType, SignupPayload } from '@/lib/schema/auth.schema';
import { axiosInstance } from '@/services/axios-instance';
import { UserResponse } from '@/types/user';

export const signup = async (payload: SignupPayload) => {
  const { data } = await axiosInstance.post('/members/join', payload);
  return data;
};

// 이메일 인증 API 호출 함수
export const sendEmailCode = async (email: string) => {
  const response = await axiosInstance.post('/members/join/email/auth', {
    email,
  });
  return response.data;
};

export const verifyEmailCode = async (
  email: string,
  verificationCode: string
) => {
  const response = await axiosInstance.post(
    '/members/join/email/verification',
    {
      email,
      verificationCode,
    }
  );
  return response.data;
};

export const signin = async (payload: SigninType) => {
  const { data } = await axiosInstance.post('/members/login', payload);
  return data;
};

// 아이디 중복 확인 (sign-up3.tsx)
export const checkUserId = async (userId: string) => {
  const { data } = await axiosInstance.get('/members/checkUserId', {
    params: { userId },
  });
  return data;
};

// 회원정보 상세 조회
export const getUserInfo = async (): Promise<UserResponse> => {
  const { data } = await axiosInstance.get('/members/me');
  return data;
};

// 회원탈퇴
export const deleteUser = async () => {
  const { data } = await axiosInstance.delete('/members/delete', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return data;
};
