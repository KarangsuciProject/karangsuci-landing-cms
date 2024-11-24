import { ComponentConstants } from '../../../constants';

const {
  INPUT_LABEL: { VARIANTS },
} = ComponentConstants;

export type Props = {
  items: string;
  type?: (typeof VARIANTS)[keyof typeof VARIANTS];
};
