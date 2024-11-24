import { useState } from 'react';
import { TextField } from '@mui/material';

import { Props } from './Input.types';
import { styleConfig } from './Input.config';

const InputComponent = ({ type = 'regular' }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const styleParam = {
    type: type,
    showPassword: showPassword,
    setShowPassword: setShowPassword,
  };

  return <TextField color="light" {...styleConfig(styleParam)} />;
};

export default InputComponent;
