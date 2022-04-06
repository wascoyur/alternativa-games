import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { Link } from 'react-router-dom';
import Auth from '../components/Auth';

const LoginPage = ({ userLogin }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { loading, error, userInfo } = userLogin;
  useEffect(() => {}, []);

  return (
    <FormContainer>
      <h3>Авторизация</h3>
      <Auth />
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
