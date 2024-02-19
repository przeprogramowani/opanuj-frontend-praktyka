export interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
}

export interface ArticleResponse {
  articles: Article[];
}
