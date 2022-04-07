import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { generateToken } from '../functions/generateAuth';
import { login } from '../redux/userAuthSlice';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleSubmit = (data) => {
    data.preventDefault();
    console.log({ email, password });
    generateToken({ email, password });
    dispatch(login({ token: 'token', name: 'name' }));
  };
  useEffect(() => {
    // console.log('getItem', localStorage.getItem('email'));
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
