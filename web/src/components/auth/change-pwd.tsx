import btnDelete from '@/assets/btn_delete.png';
import {
  changePasswordSchema,
  ChangePasswordType,
} from '@/lib/schema/auth.schema';
import {
  checkCurrentPassword,
  updatePassword,
} from '@/services/apis/user.service';
import { body3Style, head3Style } from '@/styles/global-styles';
import { COLORS } from '@/theme';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import styled from 'styled-components';

const ChangePwd = ({ onClose }: { onClose: () => void }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<ChangePasswordType>({
    resolver: zodResolver(changePasswordSchema),
  });
  const [isChecking, setIsChecking] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentPasswordValid, setCurrentPasswordValid] = useState(false);
  const navigate = useNavigate();

  const handleCheckCurrentPassword = async (currentPassword: string) => {
    try {
      setIsChecking(true);
      const response = await checkCurrentPassword(currentPassword);
      if (response && response.code === '202') {
        toast.success('현재 비밀번호가 확인되었습니다.');
        setCurrentPasswordValid(true);
      } else {
        toast.error('현재 비밀번호가 일치하지 않습니다.');
        setCurrentPasswordValid(false);
      }
    } catch (error) {
      toast.error('비밀번호 확인 중 오류가 발생했습니다.');
      setCurrentPasswordValid(false);
    } finally {
      setIsChecking(false);
    }
  };

  const onSubmit = async (data: ChangePasswordType) => {
    if (!currentPasswordValid) {
      toast.error('현재 비밀번호를 먼저 확인해 주세요.');
      return;
    }
    try {
      setIsUpdating(true);
      await updatePassword({
        password: data.currentPassword,
        newPassword: data.newPassword,
      });
      toast.success('비밀번호가 정상적으로 변경되었습니다.');
      toast.info('로그인 화면으로 이동합니다!');
      localStorage.removeItem('token'); // 토큰 삭제
      navigate('/auth'); // /auth 페이지로 이동
      reset();
      onClose();
    } catch (error) {
      toast.error('비밀번호 변경 중 오류가 발생했습니다.');
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <Overlay>
      <Container>
        <Header>
          <Spacer />
          <Title>비밀번호 변경</Title>
          <DeleteButton onClick={onClose}>
            <img src={btnDelete} alt="Delete" />
          </DeleteButton>
        </Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>새 비밀번호</Label>
          <PwdInput
            {...register('newPassword')}
            type="password"
            placeholder="새 비밀번호"
          />
          {errors.newPassword && (
            <ErrorMessage>{errors.newPassword.message}</ErrorMessage>
          )}

          <PwdInput
            {...register('confirmNewPassword')}
            type="password"
            placeholder="새 비밀번호 확인"
          />
          {errors.confirmNewPassword && (
            <ErrorMessage>{errors.confirmNewPassword.message}</ErrorMessage>
          )}

          <Label>현재 비밀번호</Label>
          <CurrentPasswordContainer>
            <PwdInput2
              {...register('currentPassword')}
              type="password"
              placeholder="현재 비밀번호"
              //   style={{ width: '100%' }}
            />
            <CheckButton
              type="button"
              onClick={() =>
                handleCheckCurrentPassword(watch('currentPassword'))
              }
              disabled={isChecking}
            >
              {isChecking ? '확인' : '확인'}
            </CheckButton>
          </CurrentPasswordContainer>
          {errors.currentPassword && (
            <ErrorMessage>{errors.currentPassword.message}</ErrorMessage>
          )}

          <ChangeButton
            type="submit"
            disabled={isUpdating || !currentPasswordValid}
          >
            {isUpdating ? '비밀번호 변경' : '비밀번호 변경'}
          </ChangeButton>
        </Form>
      </Container>
    </Overlay>
  );
};

export default ChangePwd;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Spacer = styled.div`
  width: 20px;
`;

const Title = styled.h1`
  ${head3Style}
  color: ${COLORS.Gray1};
  flex: 1;
  text-align: center;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
`;

const Label = styled.label`
  ${body3Style}
  color: ${COLORS.Gray2};
  margin-top: 20px;
`;

const PwdInput = styled(Input)`
  display: flex;
  align-items: center;
  border: 1px solid ${COLORS.Gray5};
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  height: 46px;
  background-color: ${COLORS.Gray6};

  & input {
    border: none; /* 내부 Input 컴포넌트의 기본 테두리를 제거 */
    background-color: ${COLORS.Gray6};
  }
`;

const PwdInput2 = styled(Input)`
  display: flex;
  align-items: center;
  background-color: ${COLORS.Gray6};
  border: 1px solid ${COLORS.Gray5};
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  height: 46px;
  width: 100%;

  & input {
    border: none; /* 내부 Input 컴포넌트의 기본 테두리를 제거 */
    background-color: ${COLORS.Gray6};
  }
`;

const CurrentPasswordContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

const CheckButton = styled(Button)`
  width: 63px;
  height: 46px;
  border-radius: 10px;
  background-color: transparent;
  color: ${COLORS.Main};
  border: 1px solid ${COLORS.Main};
  font-size: 14px;
  font-weight: 600;
`;

const ChangeButton = styled(Button)`
  width: 100%;
  height: 46px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 200px;
  background-color: ${COLORS.Main};
  border: none;
  color: white;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-top: -10px;
  margin-bottom: 10px;
`;
