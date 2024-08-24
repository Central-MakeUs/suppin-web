import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/common/form';
import { Input } from '@/components/common/input';
import {
  signupOneStepSchema,
  SignupOneStepType,
} from '@/lib/schema/auth.schema';
import { formatPhoneNumber } from '@/lib/utils';
import { verifyEmailCode } from '@/services/apis/user.service';
import { useSendEmailCode } from '@/services/queries/user.mutation';
import { AppDispatch } from '@/store';
import { nextStep, updateSignupField } from '@/store/signup/signup';
import { body1Style, head1Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import styled from 'styled-components';
import { Subtitle } from '../common/Subtitle';
import { Label } from '../common/label';
import { SpinLoader } from '../common/loader';
import Timer from './timer'; // 타이머 컴포넌트 임포트

export const SignUp2 = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { sendEmailMutation, isSendEmailLoading } = useSendEmailCode();

  const [formattedContact, setFormattedContact] = useState<string>('');
  const [isEmailVerified, setIsEmailVerified] = useState<boolean>(false);
  const [emailCode, setEmailCode] = useState<string>('');
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);

  const form = useForm<SignupOneStepType>({
    resolver: zodResolver(signupOneStepSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
    },
  });

  const handleSendEmailCode = async () => {
    try {
      await sendEmailMutation(form.getValues('email'));
      toast.success('인증번호가 이메일로 전송되었습니다.');
      setIsTimerActive(true); // 타이머 시작
    } catch (error) {
      console.log('이메일 전송 중 오류 발생!');
      toast.error('인증번호 전송 중 오류가 발생했습니다.');
    }
  };

  const handleVerifyEmailCode = async () => {
    try {
      const response = await verifyEmailCode(
        form.getValues('email'),
        emailCode
      );
      if (response && response.code === '202') {
        setIsEmailVerified(true);
        toast.success('이메일 인증이 완료되었습니다.');
      } else {
        toast.error('잘못된 인증번호입니다.');
      }
    } catch (error) {
      toast.error('잘못된 인증번호입니다.');
    }
  };

  const handleNextClick = (values: SignupOneStepType) => {
    if (isEmailVerified) {
      dispatch(
        updateSignupField({
          email: values.email,
          name: values.name,
          phone: values.phone,
          verificationCode: emailCode,
        })
      );
      dispatch(nextStep('3'));
    } else {
      toast.error('이메일 인증을 완료해주세요.');
    }
  };

  const handleTimerEnd = () => {
    setIsTimerActive(false);
    toast.error('인증 시간이 만료되었습니다. 다시 시도해주세요.');
  };

  const navigate = useNavigate();
  const handleCustomBackClick = () => {
    navigate('/auth?page=1');
  };

  return (
    <>
      <Subtitle
        title={'회원가입'}
        onBackClick={handleCustomBackClick}
      ></Subtitle>
      <Container>
        <Depth>2/3</Depth>
        <H1 style={{ marginTop: '15px' }}>회원 가입에 필요한</H1>
        <H1 style={{ marginBottom: '40px' }}>기본 정보를 입력해주세요</H1>
        <Form {...form}>
          <form className="form" onSubmit={form.handleSubmit(handleNextClick)}>
            <div>
              <div className="form-info">
                <Label className="form-label">기본정보 입력</Label>
                <div className="form-info-box">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="form-item" style={{ margin: '0px' }}>
                        <FormControl>
                          <Input
                            {...field}
                            className="form-input "
                            style={{
                              borderTopLeftRadius: '10px',
                              borderTopRightRadius: '10px',
                              borderBottom: 'none',
                            }}
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
                            style={{
                              borderBottomLeftRadius: '10px',
                              borderBottomRightRadius: '10px',
                            }}
                            placeholder="휴대폰 번호"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Label className="form-label">이메일 인증</Label>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <EmailContainer>
                        <Email placeholder="이메일을 입력해주세요" {...field} />
                        <Confirm
                          disabled={isSendEmailLoading}
                          type="button"
                          onClick={handleSendEmailCode}
                        >
                          {isSendEmailLoading ? (
                            <SpinLoader />
                          ) : (
                            '이메일 인증하기'
                          )}
                        </Confirm>
                      </EmailContainer>
                    )}
                  />
                  <CertiContainer>
                    <CertificationContainer>
                      <Certification
                        placeholder="인증번호 6자리를 입력해주세요"
                        value={emailCode}
                        onChange={e => setEmailCode(e.target.value)}
                      />
                      {isTimerActive && (
                        <TimerWrapper>
                          <Timer
                            initialTime={300}
                            onTimerEnd={handleTimerEnd}
                          />
                        </TimerWrapper>
                      )}
                    </CertificationContainer>
                    <Confirm1 type="button" onClick={handleVerifyEmailCode}>
                      확인
                    </Confirm1>
                  </CertiContainer>
                </div>
              </div>
            </div>
            <NextButton as="button" type="submit" $enabled={isEmailVerified}>
              다음으로
            </NextButton>
          </form>
        </Form>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 0px 20px;
  margin-top: 17px;
`;

const H1 = styled.p`
  ${head1Style}
  ${COLORS.Gray1}
`;

const Depth = styled.p`
  ${body1Style}
  color: ${COLORS.Main};
`;

const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CertiContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 14px;
  width: 100%;
`;

const CertificationContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

const Certification = styled.input`
  width: 100%;
  height: 45px;
  border-radius: 10px;
  border: 1px solid ${COLORS.Gray4};
  padding: 0.75rem;
  padding-right: 50px; /* 타이머가 들어갈 공간 확보 */
`;

const TimerWrapper = styled.div`
  position: absolute;
  right: 15px;
  color: ${COLORS.Gray2};
  font-size: 12px;
`;

const Email = styled.input`
  width: 100%;
  height: 45px;
  border-radius: 10px;
  padding: 0.75rem;
  border: 1px solid ${COLORS.Gray4};
  color: ${COLORS.Gray1};
`;

const Confirm = styled.button`
  width: 100%;
  height: 45px;
  color: ${COLORS.Main};
  border-radius: 10px;
  font-weight: 600;
  border: none;
  background-color: ${COLORS.Sub2};
`;

const Confirm1 = styled.button`
  width: 63px;
  height: 45px;
  color: ${COLORS.Main};
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  border: 1px solid ${COLORS.Main};
  background-color: ${COLORS.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface NextButtonProps {
  $enabled: boolean;
}

const NextButton = styled.button<NextButtonProps>`
  width: 100%;
  padding: 10px;
  background-color: ${props => (props.$enabled ? COLORS.Main : COLORS.Gray3)};
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: ${props => (props.$enabled ? 'pointer' : 'not-allowed')};
  font-size: 16px;
  font-weight: bold;
  margin-top: 80px;
  text-align: center;
  position: sticky;
`;

export default SignUp2;
