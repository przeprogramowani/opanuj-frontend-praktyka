import { useQuery } from '@tanstack/react-query';

export function useArticlesQuery(authorsAPI: string) {
    return useQuery({
      queryKey: ['articles'],
      queryFn: async () => {
        const response = await fetch(authorsAPI);
        const responeJson = await response.json();
        return responeJson;
      },

    });
  }
