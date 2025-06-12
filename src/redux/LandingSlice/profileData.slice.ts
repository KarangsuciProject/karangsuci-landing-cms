import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { supabase } from '../../utils';

import { profileFormValues } from '../../components/molecules/ProfileForm/ProfileForm.types';

interface profileData {
  id: number;
  profile_title: string;
  profile_description: string;
}

interface profileDataState {
  data: profileData[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: profileDataState = {
  data: [],
  status: 'idle',
  error: null,
};

const addProfileData = createAsyncThunk(
  'profileData/addProfileData',
  async (profileData: profileFormValues, thunkAPI) => {
    try {
      const { data: upsertData, error: upsertError } = await supabase
        .from('landing')
        .upsert({
          id: 1,
          profile_title: profileData.profileTitle,
          profile_desc: profileData.profileDescription,
        })
        .select()
        .single();

      if (upsertError) {
        console.error('Upsert failed:', upsertError);
        return thunkAPI.rejectWithValue(
          'Gagal Simpan Data: ' + upsertError.message
        );
      }

      return upsertData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

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
