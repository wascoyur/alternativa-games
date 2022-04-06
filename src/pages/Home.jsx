import React, { Fragment } from 'react';
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { articles } from '../assets/articles';
import { useHistory } from 'react-router-dom';
import ArticleDetailed from './ArticleDetailed';
const Home = () => {
  const history = useHistory();
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
            onClick={() => history.push('/')}>
            {article.title}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Fragment>
  );
};

export default Home;

