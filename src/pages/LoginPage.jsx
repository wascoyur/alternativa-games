import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { Link } from 'react-router-dom';
import Auth from '../components/Auth';
import { useDispatch } from 'react-redux';
import compareToken from '../functions/processToken';
import { login } from '../redux/userAuthSlice';
import { generateToken } from '../functions/generateAuth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch;
  const token = generateToken({ email, password });
  const getToken = () => compareToken(email);

  const checkPass = () => {
    //get new email
    //get token by email from localStorage
    //if no token, go register
    //else {get token new user by email + pass}
    //if new token == old token, grannt privelegy
  };

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
    // setEmail(formData.get('email'));
    // setPassword(formData.get('password'));
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
