import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { footerData, footerDataState } from './footerData.types';

import { addFooterData } from './footerData.action';

const initialState: footerDataState = {
  data: [],
  status: 'idle',
  error: null,
};

const footerDataSlice = createSlice({
  name: 'footerData',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addFooterData.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        addFooterData.fulfilled,
        (state, action: PayloadAction<footerData>) => {
          state.status = 'succeeded';
          state.data.push(action.payload);
        }
      )
      .addCase(addFooterData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export { addFooterData };
export default footerDataSlice.reducer;
