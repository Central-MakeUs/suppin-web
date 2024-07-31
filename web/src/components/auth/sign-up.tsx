import backBtn from '@/assets/btn_back_black.png';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/common/form';
import { Input } from '@/components/common/input';
import { signupSchema, SignupType } from '@/lib/schema/auth.schema';
import { formatPhoneNumber } from '@/lib/utils';
import { useSignup } from '@/services/queries/user.mutation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import Button from '../common/Btn_btns';
import { Label } from '../common/label';
import { SignupWrapper } from './sign-up.styles';

export const SignUp = () => {
  const { join, isSignupLoading } = useSignup();

  const router = useNavigate();

  const [formattedContact, setFormattedContact] = useState<string>('');

  const form = useForm<SignupType>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      userId: '',
      password: '',
      email: '',
      name: '',
      passwordConfirm: '',
      phone: '',
    },
  });

  const submitHandler = async (values: SignupType) => {
    const data = await join(values);

    if (data && data.code === '200') {
      toast.success('회원가입이 정상처리 되었습니다.');
      form.reset();
      router('/auth?authType=in');
    }
  };

  return (
    <SignupWrapper>
      <div className="signup-header">
        <img src={backBtn} alt="back" />
        <h3>회원가입</h3>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitHandler)} className="form">
          <div>
            <FormField
              control={form.control}
              name="userId"
              render={({ field }) => (
                <FormItem className="form-item">
                  <FormLabel className="form-label form-username">
                    ID
                    <span>중복확인</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="form-input"
                      placeholder="아이디를 입력해주세요"
                    />
                  </FormControl>
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
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="form-info">
              <Label className="form-label">기본정보 입력</Label>
              <div className="form-info-box">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="form-item">
                      <FormControl>
                        <Input
                          {...field}
                          className="form-input"
                          placeholder="이름"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="form-item">
                      <FormControl>
                        <Input
                          value={formattedContact}
                          onChange={e => {
                            const input = e.target.value;
                            const formatted = formatPhoneNumber(input);
                            setFormattedContact(formatted);
                            field.onChange(formatted.replace(/\D/g, ''));
                          }}
                          className="form-input"
                          placeholder="휴대폰 번호"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="form-item">
                      <FormControl>
                        <Input
                          {...field}
                          className="form-input"
                          placeholder="이메일"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          <Button
            disabled={isSignupLoading}
            className="signup-btn"
            type="submit"
            variant="add"
          >
            회원가입하기
          </Button>
        </form>
      </Form>
    </SignupWrapper>
  );
};
