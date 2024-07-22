import React, { useEffect } from 'react'
import './style.css'
import { useArticlesQuery } from '../hooks/useArticlesQuery'

interface Article {
  id: number
  title: string
  content: string
  authorId: number
}

interface Author {
  id: number
  name: string
  comments: string;
  articles: string;
}

const ArticleListWithAuthors: React.FC = () => {
    const [authors, setAuthors] = React.useState<Author[]>([]);
    const { data } = useArticlesQuery('http://localhost:3000/api/data/articles?timeout=3000');

    const fetchAuthors = async () => {
      const response = await fetch('http://localhost:3000/api/data/authors?timeout=3000');
      const data = await response.json();
      setAuthors(data.authors);
    };

    useEffect(() => {
        fetchAuthors()
    },[])

  return (
    <div>
      <h1>Articles with Authors</h1>
        <div className='container'>
            {authors.map((author) => {
              return (
                <div className='container__author' key={author.id}>
                  <p>{author.name}</p>
                  <p>Liczba komentarzy: {author.comments}</p>
                  <p>Artykuły: {author.articles}</p>
                </div>
              )
            })}
      
        {data?.articles.map((article: Article) => {
          return (
            <div className='container__articles' key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.content}</p>
            </div>
          )
        })}
          </div>
    </div>
  )
}

export default React.memo(ArticleListWithAuthors)
