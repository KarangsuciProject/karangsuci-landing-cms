import { ComponentConstants } from '../../../constants';

export type ComponentProps = {
  type?: (typeof ComponentConstants.INPUT.VARIANTS)[keyof typeof ComponentConstants.INPUT.VARIANTS];
};

export type StyleParamProps = {
  type: ComponentProps['type'];
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
};
