import { useForm, SubmitHandler } from 'react-hook-form';

import {
  InputComponent,
  ButtonComponent,
  CheckboxComponent,
  InputLabelComponent,
  FormInputComponent,
} from '../../atoms';
import { store } from '../../../redux';
import { authenticateUser } from '../../../redux/auth';

interface IFormInput {
  email: string;
  password: string;
  storeCredentials: boolean;
}

const LoginFormComponent = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      storeCredentials: false,
    },
  });

  const onSubmitForm: SubmitHandler<IFormInput> = data => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { storeCredentials, ...userData } = data;
    store.dispatch(authenticateUser(userData));
    console.log(store.getState());
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
          render={({ field }) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { ref, ...rest } = field;
            return (
              <InputComponent
                {...rest}
                inputError={errors?.email?.type}
                type="email"
              />
            );
          }}
          rules={{
            required: true,
          }}
        />
      </div>
      <div className="flex flex-col space-y-1">
        <InputLabelComponent type="password" items="Password" />
        <FormInputComponent
          name="password"
          control={control}
          render={({ field }) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { ref, ...rest } = field;
            return (
              <InputComponent
                {...rest}
                inputError={errors?.password?.type}
                type="password"
              />
            );
          }}
          rules={{
            required: true,
          }}
        />
        <FormInputComponent
          name="storeCredentials"
          control={control}
          render={({ field }) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { ref, ...rest } = field;
            return (
              <CheckboxComponent
                {...rest}
                items="Ingat Email"
                type="rememberEmail"
              />
            );
          }}
        />
      </div>
      <ButtonComponent items="Masuk" type="loginBtn" />
    </form>
  );
};

export default LoginFormComponent;
