import { ComponentConstants } from '../../../constants';

export type Props = {
  items: string;
  type?: (typeof ComponentConstants.INPUT_LABEL.VARIANTS)[keyof typeof ComponentConstants.INPUT_LABEL.VARIANTS];
};
