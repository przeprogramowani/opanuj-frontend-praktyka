import { z } from 'zod';

export const ArticleFormSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'Title cannot be empty' })
    .max(20, { message: 'Title cannot be longer than 20 characters' }),
  content: z
    .string()
    .min(1, { message: 'Content cannot be empty' })
    .max(1000, { message: 'Content cannot be longer than 1000 characters' }),
});

export type ArticleFormFields = z.infer<typeof ArticleFormSchema>;
