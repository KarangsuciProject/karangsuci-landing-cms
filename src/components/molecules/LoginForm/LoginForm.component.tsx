import { Alert } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  ButtonComponent,
  InputLabelComponent,
  FormCheckboxComponent,
  FormInputComponent,
} from '../../atoms';
import { store } from '../../../redux';
import { authenticateUser } from '../../../redux/auth';

import { IFormInput, IAuthState } from './LoginForm.types';

const LoginFormComponent = () => {
  const loginError = useSelector((state: IAuthState) => state.auth.error);
  const isLoading = useSelector((state: IAuthState) => state.auth.loading);
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
      isStoreCredentials: false,
    },
  });

  const onSubmitForm: SubmitHandler<IFormInput> = async data => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await store.dispatch(authenticateUser(data)).unwrap();

      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="flex flex-col space-y-2 lg:space-y-6"
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <div className="flex flex-col space-y-1">
        <InputLabelComponent type="email" items="Email" />
        <FormInputComponent
          name="email"
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Kolom harus diisi',
            },
          }}
          inputProps={{ inputType: 'email' }}
        />
      </div>
      <div className="flex flex-col space-y-1">
        <InputLabelComponent type="password" items="Password" />
        <FormInputComponent
          name="password"
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Kolom harus diisi',
            },
          }}
          inputProps={{
            inputType: 'password',
          }}
        />
        <FormCheckboxComponent name="isStoreCredentials" control={control} />
      </div>
      {loginError && (
        <Alert variant="outlined" severity="error">
          Login gagal. Mohon periksa kembali email dan password Anda.
        </Alert>
      )}

      <ButtonComponent items="Masuk" type="loginBtn" loading={isLoading} />
    </form>
  );
};

export default LoginFormComponent;
