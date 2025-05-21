import type { ButtonProps } from '@mui/material';

import { ComponentConstants } from '../../../constants';

export type ComponentProps = {
  items: string;
  type?: (typeof ComponentConstants.BUTTON.VARIANTS)[keyof typeof ComponentConstants.BUTTON.VARIANTS];
  loading?: boolean;
};

export type styleConfigProps = {
  regular: ButtonProps | undefined;
  loginBtn: ButtonProps | undefined;
};
