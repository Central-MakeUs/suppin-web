import { z } from 'zod';

const removeWhiteSpace = (str: string) => str.replace(/\s/g, '');

const usernameSchema = z
  .string()
  .min(4, { message: 'ID는 최소 4자 이상이어야 합니다.' })
  .max(30, { message: 'ID는 최대 30자 이하여야 합니다.' })
  .regex(/^[a-z0-9]+$/, { message: 'ID는 소문자와 숫자만 포함할 수 있습니다.' })
  .transform(removeWhiteSpace);

const passwordSchema = z
  .string()
  .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' })
  .max(20, { message: '비밀번호는 최대 20자 이하여야 합니다.' })
  .regex(/^(?=.*[a-z])(?=.*\d)(?=.*[\W_]).*$/, {
    message: '비밀번호는 영문 소문자, 숫자, 특수문자를 포함해야 합니다.',
  })
  .transform(removeWhiteSpace);

// 비밀번호 변경 유효성 검사 스키마
export const changePasswordSchema = z
  .object({
    currentPassword: passwordSchema,
    newPassword: passwordSchema,
    confirmNewPassword: passwordSchema,
  })
  .superRefine(({ newPassword, confirmNewPassword }, ctx) => {
    if (newPassword !== confirmNewPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '새 비밀번호와 비밀번호 확인이 일치하지 않습니다.',
        path: ['confirmNewPassword'],
      });
    }
  });

const nameSchema = z
  .string()
  .min(2, { message: '이름은 최소 2자 이상이어야 합니다.' })
  .max(10, { message: '이름은 최대 10자 이하여야 합니다.' })
  .regex(/^[가-힣]+$/, { message: '이름은 한글만 포함할 수 있습니다.' })
  .transform(removeWhiteSpace);

const emailSchema = z
  .string()
  .email({ message: '유효한 이메일 형식이어야 합니다.' })
  .transform(removeWhiteSpace);

const phoneSchema = z.string().transform(removeWhiteSpace);

export const signupOneStepSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
});

const userTypeSchema = z
  .enum(['인플루언서', '마케팅대행사', '브랜딩담당자'])
  .optional();

export const signupTwoStepSchema = z
  .object({
    userId: usernameSchema,
    password: passwordSchema,
    passwordConfirm: passwordSchema,
    userType: userTypeSchema,
  })
  .superRefine(({ passwordConfirm, password }, ctx) => {
    if (passwordConfirm !== password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '비밀번호가 일치해야 합니다.',
        path: ['passwordConfirm'],
      });
    }
  });

export const signinSchema = z.object({
  userId: usernameSchema,
  password: passwordSchema,
});

export type SignupOneStepType = z.infer<typeof signupOneStepSchema>;
export type SignupTwoStepType = z.infer<typeof signupTwoStepSchema>;
export type SigninType = z.infer<typeof signinSchema>;
export type SignupPayload = {
  userType?: string | undefined;
  termsAgree: {
    ageOver14Agree: boolean;
    serviceUseAgree: boolean;
    personalInfoAgree: boolean;
    marketingAgree: boolean;
  };
  userId: string;
  name: string;
  password: string;
  email: string;
  phone: string;
  verificationCode: string;
  // userType: string;
};
export type ChangePasswordType = z.infer<typeof changePasswordSchema>;
