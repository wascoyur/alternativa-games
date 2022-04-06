import React from 'react';
import LoginPage from './LoginPage';

const ArticleDetailed = (token) => {
  if (!token) return <LoginPage />;
  return <div>ArticleDetailed</div>;
};

export default ArticleDetailed;
