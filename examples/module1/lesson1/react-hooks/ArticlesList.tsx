import type { Article } from './types';
import { useArticlesClient } from './useArticlesClient';

export function ArticlesList() {
  const { articles, loading, error } = useArticlesClient();

  return (
    <>
      <h1 className="font-bold text-xl mb-4 text-gray-800">Articles</h1>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <div className="flex flex-col space-y-2">
        {articles.map((article) => (
          <ArticlePreview key={article.id} {...article} />
        ))}
      </div>
    </>
  );
}

function ArticlePreview(article: Article) {
  return (
    <div className="bg-white rounded-lg p-4">
      <h2 className="font-bold">{article.title}</h2>
      <p>{article.content}</p>
      <p>By {article.author}</p>
    </div>
  );
}
