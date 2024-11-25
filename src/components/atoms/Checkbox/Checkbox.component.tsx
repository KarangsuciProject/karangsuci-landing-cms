import { FormControlLabel } from '@mui/material';

import { styleConfig } from './Checkbox.config';
import type { Props } from './Checkbox.types';

const CheckboxComponent = ({ type }: Props) => {
  return <FormControlLabel {...styleConfig[type]} />;
};

export default CheckboxComponent;
