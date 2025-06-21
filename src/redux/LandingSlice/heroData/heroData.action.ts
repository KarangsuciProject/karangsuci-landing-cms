import { createAsyncThunk } from '@reduxjs/toolkit';

import { supabase } from '../../../utils';
import { heroFormValues } from '../../../components/molecules/HeroForm/HeroForm.types';

export const addHeroData = createAsyncThunk(
  'heroData/addHeroData',
  async (heroData: heroFormValues, thunkAPI) => {
    try {
      const file = heroData.imageUrl?.[0];
      if (!file) {
        return thunkAPI.rejectWithValue('No file selected');
      }

      const fileName = `${new Date().toISOString()}_${file.name}`;

      const { error: uploadError } = await supabase.storage
        .from('hero-image')
        .upload(`hero/${fileName}`, file, {
          cacheControl: '3600',
          upsert: true,
        });

      if (uploadError) {
        return thunkAPI.rejectWithValue('Gagal Upload: ' + uploadError.message);
      }

      const { data: urlData } = supabase.storage
        .from('hero-image')
        .getPublicUrl(`hero/${fileName}`);

      const publicUrl = urlData.publicUrl;

      const { data: upsertData, error: upsertError } = await supabase
        .from('landing')
        .upsert({
          id: 1,
          hero_title: heroData.heroTitle,
          hero_subtitle: heroData.subHeroTitle,
          hero_url: heroData.buttonUrl,
          hero_bg_url: publicUrl,
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
