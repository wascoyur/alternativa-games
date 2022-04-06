import React from 'react';
import { useParams } from 'react-router-dom';
import Article from '../components/Article';
import LoginPage from './LoginPage';

const ArticleDetailed = ({ route }) => {
  // if (!token) return <LoginPage />;
  // console.log(route.params);
  const { id } = useParams();
  return (
    <div>
      ArticleDetailed
      <span>{id}</span>
      <Article id={id} />
    </div>
  );
};

export default ArticleDetailed;
