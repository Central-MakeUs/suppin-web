import { SigninType, SignupType } from '@/lib/schema/auth.schema';
import { axiosInstance } from '@/services/axios-instance';

export const signup = async (payload: SignupType) => {
  const { data } = await axiosInstance.post('/members/join', payload);
  return data;
};

export const signin = async (payload: SigninType) => {
  const { data } = await axiosInstance.post('/members/login', payload);
  return data;
};
