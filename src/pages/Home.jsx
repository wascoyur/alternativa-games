import React, { Fragment } from 'react';
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { articles } from '../assets/articles';
import { useNavigate } from 'react-router-dom';
import ArticleDetailed from './ArticleDetailed';
const Home = () => {
  const navigate = useNavigate();
  const handleClick = ({ article }) => {
    console.log(JSON.stringify(article));
  };
  return (
    <Fragment>
      <h1>Список статей блога</h1>
      <ListGroup className='d-flex flex-column'>
        {articles.map((article) => (
          <ListGroupItem
            key={article.id}
            className='justify-content-center'
            sm={12}
            md={6}
            action
            onClick={() => {
              navigate(`/article/${article.id}`);
            }}>
            {article.title}
          </ListGroupItem>
        ))}
      </ListGroup>

      <ul>
        {articles.map((article) => (
          <li key={article.id} onClick={(article) => handleClick({ article })}>
            {article.id}
            {article.tag}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Home;

