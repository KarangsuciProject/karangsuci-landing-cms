import { InputLabel } from '@mui/material';

import { Props } from './InputLabel.types';
import { styleConfig } from './InputLabel.config';

const InputLabelComponent = ({ type = 'regular', items }: Props) => {
  return (
    <InputLabel htmlFor={type}>
      <p {...styleConfig[type]}>{items}</p>
    </InputLabel>
  );
};

export default InputLabelComponent;
