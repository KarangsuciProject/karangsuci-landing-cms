import { FormControlLabel } from '@mui/material';

import { styleConfig } from './Checkbox.config';
import type { Props } from './Checkbox.types';

const CheckboxComponent = ({ type, items, ...rest }: Props) => {
  const styleParam = {
    type: type,
    items: items,
  };

  return <FormControlLabel {...styleConfig(styleParam)} {...rest} />;
};

export default CheckboxComponent;
