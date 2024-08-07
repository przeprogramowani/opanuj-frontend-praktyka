import { useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { Comment } from '../models/interfaces';

const API_COMMENTS_URL = '/api/data/comments?timeout=2000';

function useCommentsQuery(commentsAPI: string) {
  return useQuery({
    queryKey: ['comments'],
    queryFn: async () => {
      const response = await axios.get(commentsAPI);
      return response.data.comments;
    },
  });
}

export const postComment = (newComment: Comment): Promise<AxiosResponse> => {
  return axios.post(API_COMMENTS_URL, newComment);
};

export default useCommentsQuery;
