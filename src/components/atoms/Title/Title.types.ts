import { HTMLAttributes } from 'react';

import { ComponentConstants } from '../../../constants';

const {
  TITLE: { VARIANTS },
} = ComponentConstants;

export type Props = React.DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  items: string;
  type?: (typeof VARIANTS)[keyof typeof VARIANTS];
};
