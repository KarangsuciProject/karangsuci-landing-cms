import { Button } from '@mui/material';

import { Props } from './Button.types';
import { styleConfig } from './Button.config';

const ButtonComponent = ({ items, type = 'regular' }: Props) => {
  return <Button {...styleConfig[type]}>{items}</Button>;
};

export default ButtonComponent;
