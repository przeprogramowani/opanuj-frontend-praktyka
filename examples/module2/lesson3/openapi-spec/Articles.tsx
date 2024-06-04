import { useEffect, useState } from 'react';
import { DefaultApi, Article } from './api/api-client-generated';

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const api = new DefaultApi();
    api.articlesGet().then((response) => {
      setArticles(response.articles!);
    });
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold my-4">Articles</h1>
      <ul className="space-y-4">
        {articles.map((article) => (
          <li key={article.id} className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-bold">{article.title}</p>
            <p>{article.content}</p>
            <p className="text-gray-500 mt-4">Created by {article.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
