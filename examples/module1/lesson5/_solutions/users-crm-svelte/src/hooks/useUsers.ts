import {
  createQuery,
  createMutation,
  useQueryClient,
} from '@tanstack/svelte-query';
import type { User } from '../model/User';

const USERS_QUERY_KEY = ['users'];

export function useUsers() {
  return createQuery<User[]>({
    queryKey: USERS_QUERY_KEY,
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/api/data/users');
      if (!response.ok) throw new Error('Failed to fetch users');
      return response.json();
    },
  });
}

export function useAddUser() {
  const queryClient = useQueryClient();

  return createMutation({
    mutationFn: async (newUser: Pick<User, 'name' | 'status'>) => {
      const response = await fetch('http://localhost:3000/api/data/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      if (!response.ok) throw new Error('Failed to add user');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: USERS_QUERY_KEY });
    },
  });
}
