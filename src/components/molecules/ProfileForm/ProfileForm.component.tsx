import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert } from '@mui/material';

import { useAppDispatch } from '../../../redux';
import { addProfileData } from '../../../redux/LandingSlice/profileData.slice';
import {
  ButtonComponent,
  FormInputComponent,
  InputLabelComponent,
} from '../../atoms';

import { profileFormValues } from './ProfileForm.types';
import { styleConfig } from './ProfileForm.styles';

const ProfileForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      profileTitle: '',
      profileDescription: '',
    },
  });

  const dispatch = useAppDispatch();
  const [statusMessage, setStatusMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmitForm = async (data: profileFormValues) => {
    setLoading(true);
    const res = await dispatch(addProfileData(data));
    if (addProfileData.fulfilled.match(res)) {
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
        <InputLabelComponent type="regular" items="Profile Title" />
        <FormInputComponent
          name="profileTitle"
          control={control}
          rules={{
            required: {
              value: true,
              message: '*Kolom harus diisi',
            },
          }}
          inputProps={{
            inputType: 'regular',
            placeholder: 'Profile Title',
          }}
        />
        <InputLabelComponent type="regular" items="Profile Description" />
        <FormInputComponent
          name="profileDescription"
          control={control}
          rules={{
            required: {
              value: true,
              message: '*Kolom harus diisi',
            },
          }}
          inputProps={{
            inputType: 'regular',
            placeholder: 'Profile Description',
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

export default ProfileForm;
