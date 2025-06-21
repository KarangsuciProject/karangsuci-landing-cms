import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { addHeroData } from './heroData.action';
import { heroData, heroDataState } from './heroData.types';

const initialState: heroDataState = {
  data: [],
  status: 'idle',
  error: null,
};

const heroDataSlice = createSlice({
  name: 'heroData',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addHeroData.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        addHeroData.fulfilled,
        (state, action: PayloadAction<heroData>) => {
          state.status = 'succeeded';
          state.data.push(action.payload);
        }
      )
      .addCase(addHeroData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export { addHeroData };
export default heroDataSlice.reducer;
