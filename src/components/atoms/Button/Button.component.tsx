import { Button } from '@mui/material';

import type { ComponentProps } from './Button.types';
import { styleConfig } from './Button.config';

const ButtonComponent = ({
  items,
  type = 'regular',
  ...props
}: ComponentProps) => {
  return (
    <Button {...styleConfig[type]} {...props}>
      {items}
    </Button>
  );
};

export default ButtonComponent;
