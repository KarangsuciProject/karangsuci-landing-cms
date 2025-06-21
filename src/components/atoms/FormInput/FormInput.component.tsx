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
        const { ref, ...restField } = field;
        const isFileInput = inputProps?.type === 'file';
        return (
          <InputComponent
            {...inputProps}
            {...restField}
            inputRef={ref}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (isFileInput) {
                const files = e.target.files;
                restField.onChange(files);
                inputProps?.onChange?.(e);
              } else {
                restField.onChange(e);
              }
            }}
            inputError={formState?.errors?.[name]?.message as string}
          />
        );
      }}
      rules={rules}
    />
  );
};

export default FormInputComponent;
