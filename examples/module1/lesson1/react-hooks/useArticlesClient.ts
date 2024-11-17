import { useEffect, useState } from 'react';
import axios from 'axios';
import type { Article, ArticleResponse } from './types';

export function useArticlesClient() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setLoading(true);
    axios
      .get<ArticleResponse>(
        'http://localhost:3000/api/data/articles?timeout=2000'
      )
      .then(({ data: { articles } }) => {
        setArticles(articles);
      })
      .catch((error) => {
        setError('Cannot fetch articles!');
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { articles, loading, error };
}
