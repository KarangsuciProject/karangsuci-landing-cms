import { createAsyncThunk } from '@reduxjs/toolkit';

import { supabase } from '../../../utils';
import { footerFormValues } from '../../../components/molecules/FooterForm/FooterForm.types';

export const addFooterData = createAsyncThunk(
  'footerData/addFooterData',
  async (footerData: footerFormValues, thunkAPI) => {
    try {
      const { data: upsertData, error: upsertError } = await supabase
        .from('landing')
        .upsert({
          id: 1,
          footer_email: footerData.email,
          footer_phone: footerData.phoneNumber,
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
