import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { ILoginData } from './auth.types';

const requestURL = `${import.meta.env.VITE_DEV_BACKEND_API_URL}/auth`;

export const authenticateUser = createAsyncThunk(
  'auth/userLogin',
  async (data: ILoginData, _thunkAPI) => {
    const { email, password } = data;

    try {
      const response = await axios.post(`${requestURL}/login`, {
        email: email,
        password: password,
        loginSource: 'cms',
      });

      return { ...response.data, isStoreCredentials: data.isStoreCredentials };
    } catch (error) {
      console.error(error);
      return _thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : error
      );
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/userLogout',
  async (_data, _thunkAPI) => {
    const refreshToken = localStorage.getItem('refreshToken');

    try {
      const response = await axios.post(`${requestURL}/logout`, {
        refreshToken: refreshToken,
      });

      return response;
    } catch (error) {
      console.error(error);
      return _thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : error
      );
    }
  }
);
