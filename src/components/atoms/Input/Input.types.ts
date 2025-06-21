import { ComponentConstants } from '../../../constants';
import type { TextFieldProps, TextFieldVariants } from '@mui/material';

export type InputComponentProps = {
  variant?: TextFieldVariants;
  accept?: string;
} & Omit<TextFieldProps, 'variant'> & {
    inputType?: (typeof ComponentConstants.INPUT.VARIANTS)[keyof typeof ComponentConstants.INPUT.VARIANTS];
    inputError?: string | undefined;
  };

export type StyleParamProps = {
  type: InputComponentProps['type'];
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
