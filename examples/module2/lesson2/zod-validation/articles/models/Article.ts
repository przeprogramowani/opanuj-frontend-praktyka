import { z } from 'zod';

export const ArticleSchema = z.object({
  id: z.number(),
  author: z.string(),
  title: z.string(),
  content: z.string(),
});

export const ArticleResponseSchema = z.object({
  articles: z.array(ArticleSchema),
});

export type Article = z.infer<typeof ArticleSchema>;
export type ArticleResponse = z.infer<typeof ArticleResponseSchema>;
