import { Controller, ControllerProps, FieldValues } from 'react-hook-form';
import { CheckboxComponent } from '../Checkbox';
import { CheckboxProps } from '../Checkbox/Checkbox.types';

const FormCheckboxComponent = <T extends FieldValues>({
  name,
  control,
  rules,
  checkboxProps,
}: ControllerProps<T> & {
  checkboxProps: CheckboxProps;
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { ref, ...rest } = field;
        return (
          <CheckboxComponent
            {...checkboxProps}
            {...rest}
            items="Ingat Email"
            type="rememberEmail"
          />
        );
      }}
      rules={rules}
    />
  );
};

export default FormCheckboxComponent;
