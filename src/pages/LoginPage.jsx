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
  const user = useSelector((state) => state.user);
  const [visible, setUnvisible] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const disp = (email, password) => (dispatch) => {
    console.log('disp login');
    const token = generateToken({ email, password });
    dispatch(
      login({
        token: token,
        name: email,
      }),
    );
  };
  const comparePass = (email, password) => {
    const savedToken = localStorage.getItem(email);
    if (savedToken == null) navigate('/register');
    const newToken = generateToken({ email, password });
    if (newToken == savedToken) {
      dispatch(login({ token: savedToken, name: email }));
    } else {
      setUnvisible(true);
    }
  };

  const handleSubmit = (e) => {
    const formData = new FormData(e.currentTarget);
    e.preventDefault();
    comparePass(email, password);
    // navigate('/register');
  };

  useEffect(() => {
    if (user.token !== null) navigate('/');
  }, [user]);

  return (
    <FormContainer>
      <title>Вход</title>
      <h3>Авторизация</h3>
      {!visible ? null : (
        <span
          style={{ fontSize: 18, backgroundColor: 'black', color: 'white' }}>
          {'неверный логин'}
        </span>
      )}
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
