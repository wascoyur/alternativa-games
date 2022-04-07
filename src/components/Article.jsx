import React, { useEffect, useState } from 'react';
import { Badge } from 'react-bootstrap';
import { articles } from '../assets/articles';

const Article = ({ id }) => {
  const [title, setTitle] = useState('');
  const [idArticle, setId] = useState(id);
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('');

  const getArticle = (idA) => {
    // console.log(idA);
    const out = articles.filter((a) => {
      const res = a.id == idA;
      return res;
    });
    return out[0];
  };
  useEffect(() => {
    setId(id);
    setTitle(getArticle(idArticle).title);
    setContent(getArticle(idArticle).content);
    setTag(getArticle(idArticle).tag);
  }, [id]);

  return (
    <div>
      <h2>{title}</h2>
      <span>{content}</span>
      <hr />
      <div>
        Рубрика
        <h3>
          <Badge bg='info' text='primary'>
            {tag}
          </Badge>
        </h3>
      </div>
    </div>
  );
};

export default Article;
