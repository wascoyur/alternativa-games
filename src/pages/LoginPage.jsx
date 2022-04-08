import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Auth from '../components/Auth';
import { useDispatch, useSelector } from 'react-redux';
import compareToken from '../functions/processToken';
import { login } from '../redux/userAuthSlice';
import { generateToken } from '../functions/generateAuth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPass, setCheckPass] = useState(false);
  const user = useSelector((state) => state.user);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const disp = (email, password) => {
    console.log('disp');
    const token = generateToken({ email, password });
    dispatch(
      login({
        token: token,
        name: email,
      }),
    );
  };
  const comparePass = (email, password) => {
    //get new email
    //get token by email from localStorage
    const savedToken = localStorage.getItem(email);
    //if no token, go register
    if (savedToken == null) return;
    //else {get token new user by email + pass}
    const newToken = generateToken({ email, password });
    if (newToken == savedToken) {
      setCheckPass(true);
      dispatch(
        login({
          token: savedToken,
          name: email,
        }),
      );
    } else {
      setCheckPass(false);
    }
    navigate('/');
    //if new token == old token, grant privelegy
  };

  const handleSubmit = (e) => {
    const formData = new FormData(e.currentTarget);
    e.preventDefault();
    comparePass(email, password);
    navigate('/register');
  };

  useEffect(() => {
    if (user.token !== '') navigate('./');
  }, [user]);

  return (
    <FormContainer>
      <title>Вход</title>
      <h3>Авторизация</h3>
      <Auth
        email={setEmail}
        password={setPassword}
        handleSubmit={handleSubmit}
        location={location}
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
