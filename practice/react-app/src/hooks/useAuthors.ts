import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Author = {
  id: number;
  name: string;
  comments: number;
  articles: number;
};

const fetchAuthors = async (): Promise<Author[]> => {
  const response = await axios.get<{ authors: Author[] }>(
    'http://localhost:3000/api/data/authors'
  );
  return response.data.authors;
};

export const useAuthors = () => {
  return useQuery<Author[], Error>({
    queryKey: ['authors'],
    queryFn: fetchAuthors,
  });
};
