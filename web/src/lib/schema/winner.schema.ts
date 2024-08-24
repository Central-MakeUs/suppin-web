import { z } from 'zod';

const dateTimeRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/;

export const winnerSchema = z.object({
  winnerCount: z.string(),
  eventPeriod: z
    .object({
      startDate: z
        .string()
        .regex(dateTimeRegex, '시작일은 YYYY.MM.DD hh:mm 형식이어야 합니다'),
      endDate: z
        .string()
        .regex(dateTimeRegex, '종료일은 YYYY.MM.DD hh:mm 형식이어야 합니다'),
    })
    .superRefine((data, ctx) => {
      const start = new Date(
        data.startDate.replace('.', '-').replace('.', '-').replace(' ', 'T')
      );
      const end = new Date(
        data.endDate.replace('.', '-').replace('.', '-').replace(' ', 'T')
      );
      if (end <= start) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: '종료일은 시작일보다 이후여야 합니다',
          path: ['endDate'],
        });
      }
    }),
  minLength: z.string(),
  keywords: z.array(z.string().min(1).max(15)).min(1),
});
export type WinnerFormType = z.infer<typeof winnerSchema>;
