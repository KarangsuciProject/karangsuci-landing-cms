import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { supabase } from '../../utils';

import { footerFormValues } from '../../components/molecules/FooterForm/FooterForm.types';

interface footerData {
  id: number;
  footer_email: string;
  footer_phone: string;
}

interface footerDataState {
  data: footerData[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: footerDataState = {
  data: [],
  status: 'idle',
  error: null,
};

const addFooterData = createAsyncThunk(
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
