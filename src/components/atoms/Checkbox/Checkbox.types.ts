import { ComponentConstants } from '../../../constants';

export type Props = {
  type: (typeof ComponentConstants.CHECKBOX.VARIANTS)[keyof typeof ComponentConstants.CHECKBOX.VARIANTS];
  items: string;
};

export type styleParamProps = {
  type: string;
  items: string;
};
