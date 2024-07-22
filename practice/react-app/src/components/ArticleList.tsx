import React, { useState } from 'react';
import './style.css';
import { useArticlesQuery } from '../hooks/useArticlesQuery';
import { Modal } from './Modal/Modal';
import { usePostTodo } from '../hooks/useAddArticle';


export interface Article {
  id: number;
  author: string;
  title: string;
  content: string;
}

function ArticleList() {
  const { data: articles } = useArticlesQuery(
    'http://localhost:3000/api/data/articles?timeout=3000'
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setInputValue(e.target.value);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const mutation = usePostTodo();



  const handleAdd = () => {
    const newArticle: Article = {
      id: Date.now(),
      author: 'Pawel',
      title: `Article ${articles?.articles.length + 1}`,
      content: inputValue,
    };
    mutation.mutate(newArticle);
    setInputValue('');
    handleCloseModal();
  };

  

  return (
    <>
      <div onClick={handleOpenModal}>Add article +</div>
      <div className="article-list">
        <h1>Articles</h1>
        {articles?.articles.map((article: Article) => (
          <div key={article.id} className="article-list__article">
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h1>Add article</h1>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="..."
        />
        <button onClick={handleAdd}>Adding</button>
      </Modal>
    </>
  );
}

export default ArticleList;
