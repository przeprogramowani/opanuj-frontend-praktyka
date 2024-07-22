import React from 'react';
import ArticleList from '../components/ArticleList';
import ArticleListWithAuthors from '../components/ArticleListWithAuthors';
import "./frontPage.css"

const FrontPage: React.FC = () => {
  return (
    <div className="front-page">
      <div>
        <ArticleList  />
      </div>
      <div>
        <ArticleListWithAuthors  />
      </div>
    </div>
  );
};

export default React.memo(FrontPage);
