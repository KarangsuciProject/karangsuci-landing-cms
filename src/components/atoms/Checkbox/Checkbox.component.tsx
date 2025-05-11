import { FormControlLabel } from '@mui/material';

import { styleConfig } from './Checkbox.config';
import type { CheckboxProps } from './Checkbox.types';

const CheckboxComponent = ({ type, items }: CheckboxProps) => {
  const styleParam = {
    type: type,
    items: items,
  };

  return <FormControlLabel {...styleConfig(styleParam)} />;
};

export default CheckboxComponent;
