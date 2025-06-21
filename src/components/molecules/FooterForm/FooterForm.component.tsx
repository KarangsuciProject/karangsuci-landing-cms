import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert } from '@mui/material';

import { useAppDispatch } from '../../../redux';
import { addFooterData } from '../../../redux/LandingSlice';
import {
  ButtonComponent,
  FormInputComponent,
  InputLabelComponent,
} from '../../atoms';

import { footerFormValues } from './FooterForm.types';
import { styleConfig } from './FooterForm.styles';

const FooterForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      phoneNumber: '',
    },
  });

  const dispatch = useAppDispatch();
  const [statusMessage, setStatusMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmitForm = async (data: footerFormValues) => {
    setLoading(true);
    const res = await dispatch(addFooterData(data));
    if (addFooterData.fulfilled.match(res)) {
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
        <InputLabelComponent type="regular" items="Email" />
        <FormInputComponent
          name="email"
          control={control}
          rules={{
            required: {
              value: true,
              message: '*Kolom harus diisi',
            },
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: 'Format email tidak valid',
            },
          }}
          inputProps={{
            type: 'email',
            label: 'email',
            inputType: 'regular',
            placeholder: 'Email',
          }}
        />
        <InputLabelComponent type="regular" items="Phone Number" />
        <FormInputComponent
          name="phoneNumber"
          control={control}
          rules={{
            required: {
              value: true,
              message: '*Kolom harus diisi',
            },
            pattern: {
              value: /^[0-9]{10,15}$/,
              message: 'Nomor telepon tidak valid (10-15 digit angka)',
            },
          }}
          inputProps={{
            type: 'tel',
            inputType: 'regular',
            placeholder: 'Phone Number',
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

export default FooterForm;
