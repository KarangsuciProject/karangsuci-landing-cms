import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { addProfileData } from './profileData.action';
import { profileData, profileDataState } from './profileData.types';

const initialState: profileDataState = {
  data: [],
  status: 'idle',
  error: null,
};

const profileDataSlice = createSlice({
  name: 'profileData',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addProfileData.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        addProfileData.fulfilled,
        (state, action: PayloadAction<profileData>) => {
          state.status = 'succeeded';
          state.data.push(action.payload);
        }
      )
      .addCase(addProfileData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export { addProfileData };
export default profileDataSlice.reducer;
