import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import addQuoteData from './quoteData.action';
import { quoteData, quoteDataState } from './quoteData.types';

const initialState: quoteDataState = {
  data: [],
  status: 'idle',
  error: null,
};

const quoteDataSlice = createSlice({
  name: 'quoteData',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addQuoteData.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        addQuoteData.fulfilled,
        (state, action: PayloadAction<quoteData>) => {
          state.status = 'succeeded';
          state.data.push(action.payload);
        }
      )
      .addCase(addQuoteData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default quoteDataSlice.reducer;
