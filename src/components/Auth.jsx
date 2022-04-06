import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
// import { login } from '../redux/userActions';

const Auth = (login) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    data.preventDefault();
    console.log({ email, password });
    dispatch(login(email, password));
  };
  useEffect(() => {
    console.log('getItem', localStorage.getItem('email'));
  }, [email]);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Логин</Form.Label>
        <Form.Control
          type='email'
          value={email}
          placeholder='введите логин'
          onChange={(e) => setEmail(e.target.value)}></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Пароль</Form.Label>
        <Form.Control
          type='password'
          placeholder='введите пароль'
          onChange={(e) => setPassword(e.target.value)}></Form.Control>
      </Form.Group>
      <Button
        // onSubmit={() => handleSubmit()}
        type='submit'
        variant='primary'
        className='my-3'>
        Войти
      </Button>
    </Form>
  );
};

export default Auth;
