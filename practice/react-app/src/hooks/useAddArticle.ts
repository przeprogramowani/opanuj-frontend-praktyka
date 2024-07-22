import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Article } from '../components/ArticleList';
import axios from 'axios';

const postTodo = async (newArticle: Article) => {
  const response = await axios.post(
    'http://localhost:3000/api/data/articles?timeout=3000',
    newArticle
  );
  return response.data;
};

export const usePostTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postTodo,
    onMutate: async (newArticle: Article) => {
      await queryClient.cancelQueries({ queryKey: ['articles'] });

      queryClient.setQueryData(['articles'], (old: any) => ({
        ...old,
        articles: [...old?.articles, newArticle],
      }));
    },
    onError: (error: any) => {
      console.log('error', error);
    },
    onSuccess: () => {
      console.log('success');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['articles'] });
    },
  });
};
