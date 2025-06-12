import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { supabase } from '../../utils';

import { quoteFormValues } from '../../components/molecules/QuoteForm/QuoteForm.types';

interface quoteData {
  id: number;
  quote_quotation: string;
  quote_translation: string;
}

interface quoteDataState {
  data: quoteData[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: quoteDataState = {
  data: [],
  status: 'idle',
  error: null,
};

const addQuoteData = createAsyncThunk(
  'quoteData/addQuoteData',
  async (quoteData: quoteFormValues, thunkAPI) => {
    try {
      const { data: upsertData, error: upsertError } = await supabase
        .from('landing')
        .upsert({
          id: 1,
          quotation_quote: quoteData.quote,
          quotation_translation: quoteData.quoteTranslation,
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

export { addQuoteData };
export default quoteDataSlice.reducer;
