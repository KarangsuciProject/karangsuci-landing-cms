/* eslint-disable @typescript-eslint/no-unused-vars */

import { ComponentConstants } from '../../../constants';

const {
  INPUT: { VARIANTS },
} = ComponentConstants;

export type Props = {
  type?: (typeof VARIANTS)[keyof typeof VARIANTS];
};
