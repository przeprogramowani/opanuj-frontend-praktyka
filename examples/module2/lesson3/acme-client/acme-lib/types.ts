export interface Article {
  id: number;
  author: string;
  title: string;
  content: string;
}

export interface ArticleList {
  articles: Article[];
}

export interface Author {
  id: number;
  name: string;
  comments: number;
  articles: number;
}

export interface AuthorList {
  authors: Author[];
}

export interface Comment {
  id: number;
  author: string;
  text: string;
  rating: number;
}

export interface CommentList {
  comments: Comment[];
}

export type Item = string;

export interface ItemList {
  items: Item[];
}

export interface User {
  id: number;
  name: string;
}

export interface UserList {
  users: User[];
}

export interface APIResponse<T> {
  data: T | null;
  status: number;
  message: string;
}
