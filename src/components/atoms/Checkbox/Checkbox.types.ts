import type { FormControlLabelProps } from '@mui/material';
import { ComponentConstants } from '../../../constants';

export type CheckboxProps = Omit<FormControlLabelProps, "control" | "label"> & {
  type: (typeof ComponentConstants.CHECKBOX.VARIANTS)[keyof typeof ComponentConstants.CHECKBOX.VARIANTS];
  items: string;
};

export type styleParamProps = {
  type: string;
  items: string;
};
