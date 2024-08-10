import { z } from 'zod';

const dateTimeRegex = /^\d{4}\.\d{2}\.\d{2} \d{2}:\d{2}$/;

export const createEventSchema = z.object({
  title: z
    .string()
    .min(1, '제목은 최소 1자 이상이어야 합니다')
    .max(20, '제목은 최대 20자 이하여야 합니다'),
  description: z
    .string()
    .min(1, '설명은 최소 1자 이상이어야 합니다')
    .max(500, '설명은 최대 500자 이하여야 합니다'),
  eventPeriod: z.object({
    startDate: z
      .string()
      .regex(dateTimeRegex, '시작일은 YYYY.MM.DD hh:mm 형식이어야 합니다'),
    endDate: z
      .string()
      .regex(dateTimeRegex, '종료일은 YYYY.MM.DD hh:mm 형식이어야 합니다')
      .refine((endDate, context) => {
        const { startDate } = context.parent;
        const start = new Date(
          startDate.replace('.', '-').replace('.', '-').replace(' ', 'T')
        );
        const end = new Date(
          endDate.replace('.', '-').replace('.', '-').replace(' ', 'T')
        );
        return end > start;
      }, '종료일은 시작일보다 이후여야 합니다'),
  }),
  announcementDate: z
    .string()
    .regex(dateTimeRegex, '당첨자 발표일은 YYYY.MM.DD hh:mm 형식이어야 합니다'),
  // notification: z
  //   .object({
  //     isEnabled: z.enum(['Y', 'N']).default('N'),
  //     notificationDate: z
  //       .string()
  //       .regex(dateTimeRegex, '알림 일시는 YYYY.MM.DD hh:mm 형식이어야 합니다')
  //       .optional(),
  //   })
  //   .refine(
  //     data => data.isEnabled === 'N' || data.notificationDate !== undefined,
  //     '알림 설정이 활성화된 경우 알림 일시를 선택해야 합니다'
  //   ),
});

export type CreateEventType = z.infer<typeof createEventSchema>;
