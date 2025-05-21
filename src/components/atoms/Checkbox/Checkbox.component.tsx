import { FormControlLabel } from '@mui/material';

import { styleConfig } from './Checkbox.config';
import type { CheckboxProps } from './Checkbox.types';

const CheckboxComponent = ({
  type,
  items,
  checked,
  onChange,
}: CheckboxProps) => {
  const styleParam = {
    type: type,
    items: items,
    checked: checked,
    onChange: onChange,
  };

  return <FormControlLabel {...styleConfig(styleParam)} />;
};

export default CheckboxComponent;
