import { useState } from 'react';
import { TextField } from '@mui/material';

import type { ComponentProps } from './Input.types';
import { styleConfig } from './Input.config';

const InputComponent = ({
  type = 'regular',
  inputError,
  ...rest
}: ComponentProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const styleParam = {
    type: type,
    showPassword: showPassword,
    setShowPassword: setShowPassword,
    inputError: inputError,
  };

  return (
    <TextField
      error={!!inputError}
      helperText={inputError ? inputError : null}
      {...styleConfig(styleParam)}
      {...rest}
    />
  );
};

export default InputComponent;
