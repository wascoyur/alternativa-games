import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Auth from '../components/Auth';

const LoginPage = ({ location }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
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
