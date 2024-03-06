import { useEffect, useState } from 'react';
import { getArticles } from './acme-lib/api';
import { Article } from './acme-lib/types';

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getArticles().then((response) => {
      if (response.status === 200) {
        setArticles(response.data!.articles);
      }
    });
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold my-4">Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <p>By: {article.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
