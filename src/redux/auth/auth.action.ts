import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { ILoginData } from './auth.types';

const requestURL = `${import.meta.env.VITE_DEV_BACKEND_API_URL}/auth/login`;

export const authenticateUser = createAsyncThunk(
  'auth/userLogin',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (data: ILoginData, _thunkAPI) => {
    const { email, password } = data;

    try {
      const response = await axios.post(requestURL, {
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
