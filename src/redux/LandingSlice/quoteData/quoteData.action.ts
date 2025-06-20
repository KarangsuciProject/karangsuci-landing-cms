import { createAsyncThunk } from '@reduxjs/toolkit';

import { supabase } from '../../../utils';
import { quoteFormValues } from '../../../components/molecules/QuoteForm/QuoteForm.types';

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

export default addQuoteData;
