import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const requestURL = `${import.meta.env.VITE_DEV_BACKEND_API_URL}/auth/login`;

interface LoginData {
  email: string;
  password: string;
  storeCredentials: boolean;
}

export const authenticateUser = createAsyncThunk(
  'auth/userLogin',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (data: LoginData, _thunkAPI) => {
    const { storeCredentials, ...userData } = data;

    try {
      const response = await axios.post(requestURL, {
        ...userData,
        loginSource: 'cms',
      });

      if (response.status === 200) {
        localStorage.setItem(
          'authToken',
          response?.data?.tokens?.access?.token || ''
        );
        localStorage.setItem(
          'refreshToken',
          response?.data?.tokens?.refresh?.token || ''
        );
        localStorage.setItem(
          'storeCredentials',
          storeCredentials.toString() || 'false'
        );
      }

      return response.data;
    } catch (error) {
      console.error(error);
      return _thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : error
      );
    }
  }
);
