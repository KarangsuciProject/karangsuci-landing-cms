import { createSlice } from '@reduxjs/toolkit';

import reducers from './auth.reducers';
import type { LoginState } from './auth.types';

const initialState: LoginState = {
  user: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: reducers,
});

// Action creators are generated for each case reducer function
export const { loginSuccess } = counterSlice.actions;

export const { reducer } = counterSlice;
