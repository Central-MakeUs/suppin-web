import logoImg from '@/assets/logo.svg';
import { SigninWrapper } from '@/components/auth/sign-in.styles';
import { Button } from '@/components/common/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/common/form';
import { Input } from '@/components/common/input';
import { signinSchema, SigninType } from '@/lib/schema/auth.schema';
import { useSignin } from '@/services/queries/user.mutation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export const SignIn = () => {
  const { login, isSigninLoading } = useSignin();

  const router = useNavigate();

  const form = useForm<SigninType>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      userId: '',
      password: '',
    },
  });

  const submitHandler = async (values: SigninType) => {
    const data = await login(values);

    if (data && data.code === '200') {
      toast.success('로그인이 정상처리 되었습니다.');
      form.reset();
      router('/');
    }
  };

  return (
    <SigninWrapper>
      <img src={logoImg} alt="logo" className="logo" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitHandler)} className="form">
          <FormField
            control={form.control}
            name="userId"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="아이디" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="비밀번호" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={isSigninLoading}
            className="signin-btn"
            variant="add"
          >
            로그인
          </Button>
        </form>
      </Form>
      <div className="signin-config">
        <span>비밀번호 찾기</span>
        <div className="sep" />
        <span>아이디 찾기</span>
        <div className="sep" />
        <Link to="/auth?authType=up" className="signup">
          회원가입
        </Link>
      </div>
    </SigninWrapper>
  );
};
