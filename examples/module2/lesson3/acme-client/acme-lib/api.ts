import {
  APIResponse,
  ArticleList,
  AuthorList,
  CommentList,
  UserList,
} from './types';

const BASE_URL = 'http://localhost:3000/api/data';

async function fetchResource<T>(url: string): Promise<APIResponse<T>> {
  try {
    const response = await fetch(url);
    const data: T = await response.json();
    return { data, status: response.status, message: 'Success' };
  } catch (error) {
    return { data: null, status: 500, message: (error as Error).message };
  }
}

export const getArticles = async (): Promise<APIResponse<ArticleList>> => {
  return fetchResource<ArticleList>(`${BASE_URL}/articles`);
};

export const getAuthors = async (): Promise<APIResponse<AuthorList>> => {
  return fetchResource<AuthorList>(`${BASE_URL}/authors`);
};

export const getComments = async (): Promise<APIResponse<CommentList>> => {
  return fetchResource<CommentList>(`${BASE_URL}/comments`);
};

export const getUsers = async (): Promise<APIResponse<UserList>> => {
  return fetchResource<UserList>(`${BASE_URL}/users`);
};
