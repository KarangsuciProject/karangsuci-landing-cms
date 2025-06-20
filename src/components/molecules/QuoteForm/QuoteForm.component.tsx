import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert } from '@mui/material';

import { useAppDispatch } from '../../../redux';
import addQuoteData from '../../../redux/LandingSlice/quoteData/quoteData.action';
import {
  ButtonComponent,
  FormInputComponent,
  InputLabelComponent,
} from '../../atoms';

import { quoteFormValues } from './QuoteForm.types';
import { styleConfig } from './QuoteForm.styles';

const QuoteForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      quote: '',
      quoteTranslation: '',
    },
  });

  const dispatch = useAppDispatch();
  const [statusMessage, setStatusMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmitForm = async (data: quoteFormValues) => {
    setLoading(true);
    const res = await dispatch(addQuoteData(data));
    if (addQuoteData.fulfilled.match(res)) {
      setStatusMessage('success');
    } else {
      setStatusMessage('error');
    }
    setLoading(false);
  };

  return (
    <form
      className={styleConfig.formContainer}
      onSubmit={handleSubmit(onSubmitForm)}
    >
      {statusMessage === 'success' && (
        <Alert severity="success">Berhasil menyimpan data</Alert>
      )}
      {statusMessage === 'error' && (
        <Alert severity="error">Gagal menyimpan data</Alert>
      )}
      <div className={styleConfig.inputFieldContainer}>
        <InputLabelComponent type="regular" items="Quote" />
        <FormInputComponent
          name="quote"
          control={control}
          rules={{
            required: {
              value: true,
              message: '*Kolom harus diisi',
            },
          }}
          inputProps={{
            inputType: 'regular',
            placeholder: 'Quatation',
          }}
        />
        <InputLabelComponent type="regular" items="Quote Translation" />
        <FormInputComponent
          name="quoteTranslation"
          control={control}
          rules={{
            required: {
              value: true,
              message: '*Kolom harus diisi',
            },
          }}
          inputProps={{
            inputType: 'regular',
            placeholder: 'Quote Translation',
          }}
        />
      </div>
      <ButtonComponent
        items={loading ? 'Menyimpan..' : 'Simpan'}
        type="regular"
      />
    </form>
  );
};

export default QuoteForm;
