import { createAsyncThunk } from '@reduxjs/toolkit';

import { supabase } from '../../../utils';
import { profileFormValues } from '../../../components/molecules/ProfileForm/ProfileForm.types';

export const addProfileData = createAsyncThunk(
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
