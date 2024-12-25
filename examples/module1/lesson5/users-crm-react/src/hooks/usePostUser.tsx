import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postUser } from '../api/userRequest';

export const usePostUser = (callback: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
      mutationFn: postUser,
      onSuccess: () => {
        callback();
        queryClient.invalidateQueries({ queryKey: ['users'] });
      }
  });   
}