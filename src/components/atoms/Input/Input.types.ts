import { ComponentConstants } from '../../../constants';

export type Props = {
  type?: (typeof ComponentConstants.INPUT.VARIANTS)[keyof typeof ComponentConstants.INPUT.VARIANTS];
};

export type StyleParamProps = {
  type: string;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
};
