import { useState } from 'react';
import { TextField } from '@mui/material';

import type { ComponentProps } from './Input.types';
import { styleConfig } from './Input.config';

const InputComponent = ({ type = 'regular' }: ComponentProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const styleParam = {
    type: type,
    showPassword: showPassword,
    setShowPassword: setShowPassword,
  };

  return <TextField {...styleConfig(styleParam)} />;
};

export default InputComponent;
