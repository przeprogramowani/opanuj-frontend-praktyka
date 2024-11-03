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
    onSuccess: () => {
      queryClient.invalidateQueries(['articles']);
    },
  });
};
