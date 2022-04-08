import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Auth from '../components/Auth';
import FormContainer from '../components/FormContainer';
import { generateToken } from '../functions/generateAuth';
import { login } from '../redux/userAuthSlice';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const disp = (email, password) => {
    console.log('disp');
    const token = generateToken({ email, password });
    dispatch(
      login({
        token: token,
        name: email,
      }),
    );
    localStorage.setItem(email, token);
  };

  const handleSubmit = (e) => {
    const formData = new FormData(e.currentTarget);
    e.preventDefault();
    disp(email, password);
    console.log('handle');

    navigate('/');
  };
  // useEffect(() => {
  //   console.log(user);
  //   navigate('/');
  // }, [user.name]);

  return (
    <FormContainer>
      Регистрация нового пользователя
      <Auth
        email={setEmail}
        password={setPassword}
        handleSubmit={handleSubmit}
        location={location}
      />
    </FormContainer>
  );
};

export default RegisterPage;
