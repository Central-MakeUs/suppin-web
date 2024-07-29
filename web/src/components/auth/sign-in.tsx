import logoImg from '@/assets/logo.svg';
import { SigninWrapper } from '@/components/auth/sign-in.styles';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/common/form';
import { Input } from '@/components/common/input';
import { signinSchema, SigninType } from '@/lib/schema/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Button from '../common/Btn_btns';

export const SignIn = () => {
  const form = useForm<SigninType>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const submitHandler = (values: SigninType) => {
    console.log(values);
  };

  return (
    <SigninWrapper>
      <img src={logoImg} alt="logo" className="logo" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitHandler)} className="form">
          <FormField
            control={form.control}
            name="username"
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
          <Button className="signin-btn" variant="add">
            로그인
          </Button>
        </form>
      </Form>
      <div className="signin-config">
        <span>비밀번호 찾기</span>
        <div className="sep" />
        <span>아이디 찾기</span>
        <div className="sep" />
        <span className="signup">회원가입</span>
      </div>
    </SigninWrapper>
  );
};
