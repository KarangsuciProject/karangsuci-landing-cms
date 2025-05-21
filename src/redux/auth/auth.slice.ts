import { createSlice } from '@reduxjs/toolkit';

import reducers from './auth.reducers';
import { authenticateUser } from './auth.action';
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
  reducers: reducers,
  extraReducers: builder => {
    builder.addCase(authenticateUser.pending, state => {
      state.loading = true;
    });
    builder.addCase(authenticateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user._doc;
      state.isLoggedIn = true;
      state.error = '';

      localStorage.setItem(
        'authToken',
        action.payload?.tokens?.access?.token || ''
      );
      localStorage.setItem(
        'refreshToken',
        action.payload?.tokens?.refresh?.token || ''
      );
      localStorage.setItem(
        'isStoreCredentials',
        action.payload?.isStoreCredentials.toString() || 'false'
      );
    });
    builder.addCase(authenticateUser.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action.payload && typeof action.payload === 'string'
          ? action.payload
          : 'An error occurred';
    });
  },
});

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions;
export const { reducer } = authSlice;
