import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { Link } from 'react-router-dom';
import Auth from '../components/Auth';
import { useDispatch } from 'react-redux';
import compareToken from '../functions/processToken';
import { login } from '../redux/userAuthSlice';
import { generateToken } from '../functions/generateAuth';

const LoginPage = ({ userLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch;
  const token = generateToken({ email, password });
  const getToken = () => compareToken(email);

  dispatch(
    login({
      token: token,
      name: email,
    }),

    localStorage.setItem(email, token),
  );
  const handleSubmit = (e) => {
    const formData = new FormData(e.currentTarget);
    e.preventDefault();
    console.log(formData.get('email'), formData.get('password'));
  };
  return (
    <FormContainer>
      <title>Вход</title>
      <h3>Авторизация</h3>
      <Auth
        email={setEmail}
        password={setPassword}
        handleSubmit={handleSubmit}
      />
      <Row>
        <Col>
          Новый пользователь?
          <Link to={'/register'}> регистрация</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginPage;
