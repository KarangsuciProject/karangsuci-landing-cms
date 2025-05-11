import { Controller, ControllerProps, FieldValues } from 'react-hook-form';
import { InputComponent } from '../Input';
import { InputComponentProps } from '../Input/Input.types';

const FormInputComponent = <T extends FieldValues>({
  name,
  control,
  rules,
  inputProps,
}: ControllerProps<T> & {
  inputProps: InputComponentProps;
}) => {
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
            inputError={formState?.errors?.email?.type as string}
            inputType="email"
          />
        );
      }}
      rules={rules}
    />
  );
};

export default FormInputComponent;
