import { useEffect, useState } from 'react';
import { Article } from '../models/Article';
import { getArticles, createArticle } from '../api/articlesClient';

export function useArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    getArticles()
      .then((data) => setArticles(data))
      .catch(() => setError(true));
  }, []);

  const addArticle = async (title: string, content: string) => {
    await createArticle(title, content);

    setArticles([
      {
        id: articles.length + 1,
        title,
        content,
        author: 'John Doe',
      },
      ...articles,
    ]);
  };

  return { articles, error, addArticle };
}
