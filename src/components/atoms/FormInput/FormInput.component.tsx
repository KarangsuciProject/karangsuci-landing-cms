import { Controller, FieldValues } from 'react-hook-form';

import { FormInputComponentProps } from './FormInput.types';

import { InputComponent } from '../Input';

const FormInputComponent = <T extends FieldValues>({
  name,
  control,
  rules,
  inputProps,
}: FormInputComponentProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, formState }) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { ref, ...rest } = field;
        return (
          <InputComponent
            {...inputProps}
            {...rest}
            inputError={formState?.errors?.[name]?.message as string}
          />
        );
      }}
      rules={rules}
    />
  );
};

export default FormInputComponent;
