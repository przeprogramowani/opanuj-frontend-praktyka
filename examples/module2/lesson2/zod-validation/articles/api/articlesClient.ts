import axios from 'axios';
import {
  Article,
  ArticleResponse,
  ArticleResponseSchema,
} from '../models/Article';
import { ZodError } from 'zod';

const API_URL = 'http://localhost:3000/api/data/articles';

export async function getArticles(): Promise<Article[]> {
  try {
    const response = await axios.get<ArticleResponse>(API_URL);
    const { articles } = ArticleResponseSchema.parse(response.data);
    return articles;
  } catch (error) {
    if (error instanceof ZodError) {
      console.error(error.errors);
    }

    throw new Error('Error fetching articles');
  }
}

export async function createArticle(title: string, content: string) {
  try {
    await axios.post(API_URL, { title, content });
  } catch (error) {
    // Handle error
  }
}
