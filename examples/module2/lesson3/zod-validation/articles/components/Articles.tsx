import { useArticles } from '../hooks/useArticles';
import ArticleForm from './ArticleForm';

const Articles = () => {
  const { articles, error, addArticle } = useArticles();

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Articles</h1>
      {error && <p className="text-red-500">Error fetching articles</p>}
      <div className="mb-4">
        <ArticleForm onFormSubmit={addArticle} />
      </div>
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
