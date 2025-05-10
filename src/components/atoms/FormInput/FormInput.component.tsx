import { Controller, ControllerProps, FieldValues } from 'react-hook-form';

const FormInputComponent = <T extends FieldValues>({
  name,
  control,
  render,
  rules,
}: ControllerProps<T>) => {
  return (
    <Controller name={name} control={control} render={render} rules={rules} />
  );
};

export default FormInputComponent;
