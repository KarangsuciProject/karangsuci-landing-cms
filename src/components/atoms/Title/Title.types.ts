import { HTMLAttributes } from 'react';

import { ComponentConstants } from '../../../constants';

export type Props = React.DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  items: string;
  type?: (typeof ComponentConstants.TITLE.VARIANTS)[keyof typeof ComponentConstants.TITLE.VARIANTS];
};
