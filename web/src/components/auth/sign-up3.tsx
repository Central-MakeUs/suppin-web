// depth3

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/common/form';
import { Input } from '@/components/common/input';
import {
  signupTwoStepSchema,
  SignupTwoStepType,
} from '@/lib/schema/auth.schema';
import { checkUserId } from '@/services/apis/user.service';
import { useSignup } from '@/services/queries/user.mutation';
import { RootState } from '@/store';
import { body1Style, head1Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import styled from 'styled-components';
import { Subtitle } from '../common/Subtitle';
import { Button } from '../common/button';

export const SignUp3 = () => {
  const router = useNavigate();

  const { join, isSignupLoading } = useSignup();
  const { email, name, phone, verificationCode } = useSelector(
    (state: RootState) => state.signup
  );

  const [isChecking, setIsChecking] = useState<boolean>(false);
  const [isUserIdValid, setIsUserIdValid] = useState<boolean | null>(null);

  const form = useForm<SignupTwoStepType>({
    resolver: zodResolver(signupTwoStepSchema),
    defaultValues: {
      userId: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const submitHandler = async (values: SignupTwoStepType) => {
    const data = await join({
      ...values,
      email,
      phone,
      name,
      verificationCode,
    });

    if (data && data.code === '200') {
      toast.success('회원가입이 정상처리 되었습니다.');
      form.reset();
      router('/auth?authType=in');
    }
  };

  const handleCheckUserId = async () => {
    const userId = form.getValues('userId');
    if (!userId) {
      toast.error('아이디를 입력해주세요.');
      return;
    }

    setIsChecking(true);
    try {
      const response = await checkUserId(userId);
      setIsUserIdValid(response);
      if (response) {
        toast.success('사용 가능한 아이디입니다.');
      } else {
        toast.error('이미 사용 중인 아이디입니다.');
      }
    } catch (error) {
      toast.error('아이디 확인 중 오류가 발생했습니다.');
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <Container>
      <Subtitle title={'회원가입'}></Subtitle>
      <Depth>3/3</Depth>
      <H1 style={{ marginTop: '15px' }}>Suppin 이용을 위한</H1>
      <H1 style={{ marginBottom: '40px' }}>계정 정보를 생성해주세요</H1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitHandler)} className="form">
          <FormField
            control={form.control}
            name="userId"
            render={({ field }) => (
              <FormItem className="form-item">
                <FormLabel
                  className="form-label form-username"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  ID
                  <button
                    type="button"
                    onClick={handleCheckUserId}
                    disabled={isChecking}
                  >
                    {isChecking ? '확인 중...' : '중복확인'}
                  </button>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="form-input"
                    placeholder="아이디를 입력해주세요"
                    style={{ borderRadius: '10px' }}
                  />
                </FormControl>
                <FormMessage />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="form-item">
                <FormLabel className="form-label">비밀번호</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    className="form-input"
                    placeholder="비밀번호를 입력해주세요"
                    style={{ borderRadius: '10px' }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem className="form-item">
                <FormLabel className="form-label">비밀번호 확인</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    className="form-input"
                    placeholder="비밀번호를 다시 입력해주세요"
                    style={{ borderRadius: '10px' }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={isSignupLoading}
            className="signup-btn"
            variant="add"
          >
            회원가입하기
          </Button>
        </form>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px 20px;
  margin-top: 17px;

  .signup-btn {
    width: 100%;
  }
`;

const H1 = styled.p`
  ${head1Style}
  ${COLORS.Gray1}
`;

const Depth = styled.p`
  ${body1Style}
  color: ${COLORS.Main};
`;
