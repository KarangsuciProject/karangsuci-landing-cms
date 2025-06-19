import { createSlice } from '@reduxjs/toolkit';

import { authReducers, logoutReducers } from './auth.reducers';
import type { ILoginState } from './auth.types';

const initialState: ILoginState = {
  user: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    authReducers(builder);
    logoutReducers(builder);
  },
});

// Action creators are generated for each case reducer function
export const { reducer } = authSlice;
