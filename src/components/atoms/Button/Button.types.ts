import { ComponentConstants } from '../../../constants';

export type Props = {
  items: string;
  type?: (typeof ComponentConstants.BUTTON.VARIANTS)[keyof typeof ComponentConstants.BUTTON.VARIANTS];
};
