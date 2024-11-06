import { useQuery } from '@tanstack/react-query';

export const useArticlesQuery = () =>
  useQuery({
    queryKey: ['articles'],
    queryFn: () =>
      fetch('http://localhost:3000/api/data/articles?timeout=5000')
        .then((res) => res.json())
        .then((res) => res.articles),
  });
