import { createSlice } from '@reduxjs/toolkit';

export const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState: { token: '' },

  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.name;
    },
    logout: (state) => {
      state.token = '';
      state.user = '';
    },
  },
});
export const { login, logout } = userAuthSlice.actions;
export default userAuthSlice.reducer;
