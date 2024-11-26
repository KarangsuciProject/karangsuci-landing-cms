import { Button } from '@mui/material';

import type { ComponentProps } from './Button.types';
import { styleConfig } from './Button.config';

const ButtonComponent = ({ items, type = 'regular' }: ComponentProps) => {
  return <Button {...styleConfig[type]}>{items}</Button>;
};

export default ButtonComponent;
