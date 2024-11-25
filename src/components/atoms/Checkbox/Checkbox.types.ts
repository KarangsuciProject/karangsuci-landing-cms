import { ComponentConstants } from '../../../constants';

export type Props = {
  type: (typeof ComponentConstants.CHECKBOX.VARIANTS)[keyof typeof ComponentConstants.CHECKBOX.VARIANTS];
};
