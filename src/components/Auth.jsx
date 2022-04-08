import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Auth = ({ email, password, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Логин</Form.Label>
        <Form.Control
          type='email'
          // value={email}
          name='email'
          placeholder='введите логин'
          onChange={(e) => email(e.target.value)}></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Пароль</Form.Label>
        <Form.Control
          type='password'
          name='password'
          placeholder='введите пароль'
          onChange={(e) => password(e.target.value)}></Form.Control>
      </Form.Group>
      <Button type='submit' variant='primary' className='my-3'>
        Войти
      </Button>
    </Form>
  );
};

export default Auth;
