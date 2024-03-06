import { z } from 'zod';

const ERROR_MESSAGES = {
  ORIGIN_REQUIRED: 'Lokalizacja początkowa jest wymagana',
  ORIGIN_MAX_LENGTH: (limit: number) =>
    `Nazwa lokalizacji początkowej nie może przekraczać ${limit} znaków`,
  DESTINATION_REQUIRED: 'Lokalizacja docelowa jest wymagana',
  DESTINATION_MAX_LENGTH: (limit: number) =>
    `Nazwa lokalizacji docelowej nie może przekraczać ${limit} znaków`,
  START_DATE_FORMAT: 'Data początkowa musi mieć format DD-MM-YYYY',
  END_DATE_FORMAT: 'Data powrotu musi mieć format DD-MM-YYYY',
  END_DATE_REQUIRED: 'Data powrotu jest wymagana',
};

export const FormSchema = z
  .object({
    origin: z
      .string()
      .min(1, { message: ERROR_MESSAGES.ORIGIN_REQUIRED })
      .max(100, {
        message: ERROR_MESSAGES.ORIGIN_MAX_LENGTH(100),
      }),
    destination: z
      .string()
      .min(1, { message: ERROR_MESSAGES.DESTINATION_REQUIRED })
      .max(100, {
        message: ERROR_MESSAGES.DESTINATION_MAX_LENGTH(100),
      }),
    startDate: z.string().regex(/^\d{2}-\d{2}-\d{4}$/, {
      message: ERROR_MESSAGES.START_DATE_FORMAT,
    }),
    endDate: z.string().optional(),
    trip: z.enum(['one-way', 'round-trip']),
  })
  .superRefine((val, ctx) => {
    if (val.trip === 'round-trip') {
      if (val.endDate === '') {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: ERROR_MESSAGES.END_DATE_REQUIRED,
          path: ['endDate'],
        });
      }

      if (val.endDate && !val.endDate.match(/^\d{2}-\d{2}-\d{4}$/)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: ERROR_MESSAGES.END_DATE_FORMAT,
          path: ['endDate'],
        });
      }
    }
  });

export type FormValues = z.infer<typeof FormSchema>;
