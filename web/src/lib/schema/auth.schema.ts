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

export const signupSchema = z
  .object({
    username: usernameSchema,
    password: passwordSchema,
    passwordConfirm: passwordSchema,
    type: z.enum(
      ['unselected', '인플루언서', '마케팅 대행사', '브랜드 담당자'],
      {
        errorMap: () => ({ message: '유형을 선택해야 합니다.' }),
      }
    ),
    name: nameSchema,
    email: emailSchema,
    phone: phoneSchema,
  })
  .superRefine(({ passwordConfirm, password }, ctx) => {
    if (passwordConfirm !== password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '비밀번호가 일치해야 합니다.',
      });
    }
  });

export const signinSchema = z.object({
  username: usernameSchema,
  password: passwordSchema,
});

export type SignupType = z.infer<typeof signupSchema>;
export type SigninType = z.infer<typeof signinSchema>;
