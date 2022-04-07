import { configureStore } from '@reduxjs/toolkit';
import token from './userAuthSlice';

export default configureStore({ reducer: { user: token } });