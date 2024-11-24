import { ComponentConstants } from '../../../constants';

const {
  CHECKBOX: { VARIANTS },
} = ComponentConstants;

export type Props = {
  type: (typeof VARIANTS)[keyof typeof VARIANTS];
};
