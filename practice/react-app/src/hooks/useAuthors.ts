import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { queryClient } from '../App';

export type Author = {
  id: number;
  name: string;
  comments: number;
  articles: number;
};

//------ query

const fetchAuthors = async (): Promise<Author[]> => {
  try {
    const response = await axios.get<{ authors: Author[] }>(
      'http://localhost:3001/api/data/authors'
    );
    return response.data.authors;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data.message ||
          'An error occurred while fetching authors'
      );
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const useAuthors = () => {
  return useQuery({
    queryKey: ['authors'],
    queryFn: fetchAuthors,
    refetchInterval: 10000,
  });
};

//------ mutation

export const useAddAuthor = () =>
  useMutation({
    mutationFn: (author: Author) =>
      axios.post<{ author: Author }>(
        'http://localhost:3001/api/data/authors',
        author
      ),
    mutationKey: ['addAuthor'],
    onMutate: async (newAuthor) => {
      await queryClient.cancelQueries({ queryKey: ['authors'] });
      const optimisticAuthors = queryClient.setQueryData(
        ['authors'],
        (old: Author[]) => [...old, newAuthor]
      );
      return { optimisticAuthors };
    },
    // onSuccess: () => queryClient.invalidateQueries({ queryKey: ['authors'] }),
  });
