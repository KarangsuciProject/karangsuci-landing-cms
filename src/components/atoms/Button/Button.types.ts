/* eslint-disable @typescript-eslint/no-unused-vars */

import { ComponentConstants } from '../../../constants';

const {
  BUTTON: { VARIANTS },
} = ComponentConstants;

export type Props = {
  items: string;
  type?: (typeof VARIANTS)[keyof typeof VARIANTS];
};
