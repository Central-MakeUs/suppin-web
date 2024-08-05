import { SigninType, SignupType } from '@/lib/schema/auth.schema';
import { axiosInstance } from '@/services/axios-instance';

export const signup = async (payload: SignupType) => {
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

export const checkUserId = async (userId: string) => {
  console.log('전송되는 userId:', userId); // 요청 전 userId 로그 출력

  const { data } = await axiosInstance.post('/members/checkUserId', {
    userId,
  });
  return data;
};
