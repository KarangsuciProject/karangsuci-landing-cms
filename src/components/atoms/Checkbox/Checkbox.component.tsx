import { FormControlLabel } from '@mui/material';

import { styleConfig } from './Checkbox.config';

const CheckboxComponent = ({ type }: Props) => {
  return <FormControlLabel {...styleConfig[type]} />;
};

export default CheckboxComponent;
