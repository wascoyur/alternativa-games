import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };
  return (
    <Form onSubmit={submitHandler} className='input-group'>
      <FormControl
        className='my-2'
        type='text'
        name='q'
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        placeholder='Найти статью по заголовку...'></FormControl>
      <Button
        type='submit'
        variant='outline-success'
        className='input-group-append m-1 '>
        Найти
      </Button>
    </Form>
  );
};

export default SearchBox;
