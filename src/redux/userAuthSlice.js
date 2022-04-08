import { createSlice } from '@reduxjs/toolkit';

export const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState: { token: null },

  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.name = action.payload.name;
    },
    logout: (state) => {
      state.token = '';
      state.name = '';
    },
  },
});
export const { login, logout } = userAuthSlice.actions;
export default userAuthSlice.reducer;
