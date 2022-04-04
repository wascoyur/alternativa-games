import React, { Fragment } from 'react';
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

const Home = () => {
  const articles = [
    {
      id: 1,
      title: 'Есть ли жизнь на Марсе?',
      content: 'lorem20',
      tag: 'space',
    },
    {
      id: 2,
      title: 'Одиноки ли мы во Вселенной?',
      content: 'lorem20',
      tag: 'space',
    },
    {
      id: 3,
      title: 'Инопланетяне среди нас?',
      content: 'lorem20',
      tag: 'space',
    },
  ];
  return (
    <Fragment>
      <h1>Список статей блога</h1>
      <ListGroup className='d-flex flex-column'>
        {articles.map((article) => (
          <ListGroupItem
            key={article.id}
            className='justify-content-center'
            sm={12}
            md={6}>
            {article.title}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Fragment>
  );
};

export default Home;
