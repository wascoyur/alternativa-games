import React from 'react';
import { useParams } from 'react-router-dom';
import Article from '../components/Article';
import LoginPage from './LoginPage';

const ArticleDetailed = () => {
  // if (!token) return <LoginPage />;
  // console.log(route.params);
  const { id } = useParams();
  return (
    <div>
      <Article id={id} />
    </div>
  );
};

export default ArticleDetailed;
