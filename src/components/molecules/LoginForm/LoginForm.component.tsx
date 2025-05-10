import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import {
  InputComponent,
  ButtonComponent,
  CheckboxComponent,
  InputLabelComponent,
} from '../../atoms';

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
    console.log(data);
  };

  return (
    <form
      className="flex flex-col space-y-2 lg:space-y-6"
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <div className="flex flex-col space-y-1">
        <InputLabelComponent type="email" items="Email" />
        <Controller
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
        <Controller
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
        <Controller
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
