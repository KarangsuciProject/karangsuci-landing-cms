import { ControllerProps, FieldValues } from 'react-hook-form';

import { InputComponentProps } from '../Input/Input.types';

export type FormInputComponentProps<T extends FieldValues> = Omit<
  ControllerProps<T>,
  'render'
> & {
  inputProps: InputComponentProps;
};
