import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

import { authenticateUser, logoutUser } from './auth.action';
import type { ILoginState } from './auth.types';

export const authReducers = (builder: ActionReducerMapBuilder<ILoginState>) => {
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
};

export const logoutReducers = (
  builder: ActionReducerMapBuilder<ILoginState>
) => {
  builder.addCase(logoutUser.pending, state => {
    state.loading = true;
  });
  builder.addCase(logoutUser.fulfilled, state => {
    state.loading = false;
    state.user = null;
    state.isLoggedIn = false;
    state.error = '';

    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('isStoreCredentials');
  });
  builder.addCase(logoutUser.rejected, (state, action) => {
    state.loading = false;
    state.error =
      action.payload && typeof action.payload === 'string'
        ? action.payload
        : 'An error occurred';
  });
};
