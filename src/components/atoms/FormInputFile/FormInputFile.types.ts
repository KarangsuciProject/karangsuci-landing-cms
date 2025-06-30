import { FieldValues, ControllerProps } from 'react-hook-form';

export type FormInputFileProps<T extends FieldValues> = Omit<
  ControllerProps<T>,
  'render'
> & {
  items: string;
  acceptedFile: string;
};
