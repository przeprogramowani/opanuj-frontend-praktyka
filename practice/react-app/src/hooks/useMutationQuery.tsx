import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useMutationQuery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => {
      return fetch('http://localhost:3000/api/data/articles?timeout=3000', {
        method: 'POST',
      }).then((res) => {
        console.log('POST request status:', res.statusText);
      });
    },
    onMutate: async () => {
      const newData = {
        author: 'Peter Parker',
        content: 'Excepteur sint occaecat cupidatat non proident.',
        id: 11,
        title: 'Article 11',
      };

      await queryClient.cancelQueries({ queryKey: ['articles'] });

      const previousArticles = queryClient.getQueryData(['articles']);

      //optimistic update
      queryClient.setQueryData(['articles'], (old) => [...old, newData]);

      return { previousArticles };
    },

    //if falls return to previus data
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(['articles'], context.previousArticles);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['articles'] });
    },
  });
};
