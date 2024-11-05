// example

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (_userId: number, _thunkAPI) => {
    const response = await new Promise(resolve => setTimeout(resolve, 1000));

    return response;
  }
);
