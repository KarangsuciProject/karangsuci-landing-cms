import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const requestURL = `${import.meta.env.VITE_DEV_BACKEND_API_URL}/auth/login`;

interface UserData {
  email: string;
  password: string;
}

export const authenticateUser = createAsyncThunk(
  'auth/userLogin',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (userData: UserData, _thunkAPI) => {
    try {
      const response = await axios.post(requestURL, {
        ...userData,
        loginSource: 'cms',
      });
      // TO-DO set redux state after get response
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
);
