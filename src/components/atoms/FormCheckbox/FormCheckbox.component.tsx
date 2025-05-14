import { Controller, ControllerProps, FieldValues } from 'react-hook-form';
import { CheckboxComponent } from '../Checkbox';
import { CheckboxProps } from '../Checkbox/Checkbox.types';

// Exclude the `render` prop from `ControllerProps`
type FormCheckboxComponentProps<T extends FieldValues> = Omit<
  ControllerProps<T>,
  'render'
> & {
  checkboxProps?: CheckboxProps;
};

const FormCheckboxComponent = <T extends FieldValues>({
  name,
  control,
  rules,
  checkboxProps,
}: FormCheckboxComponentProps<T>) => {
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
