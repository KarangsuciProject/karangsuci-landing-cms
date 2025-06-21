import { useState } from 'react';
import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
} from '@mui/material';

import type { InputComponentProps } from './Input.types';
import { styleConfig } from './Input.config';

const InputComponent = ({
  inputType = 'regular',
  inputError,
  label,
  ...rest
}: InputComponentProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const styleParam = {
    type: inputType,
    showPassword: showPassword,
    setShowPassword: setShowPassword,
    inputError: inputError,
  };

  if (rest.type === 'file') {
    return (
      <FormControl error={!!inputError} fullWidth>
        {label && <InputLabel shrink>{label}</InputLabel>}
        <Input
          type="file"
          inputRef={rest.inputRef}
          inputProps={{
            accept: rest.accept,
          }}
          onChange={rest.onChange}
        />
        <FormHelperText>{inputError}</FormHelperText>
      </FormControl>
    );
  }

  return (
    <TextField
      error={!!inputError}
      helperText={inputError ? inputError : ''}
      {...rest}
      {...styleConfig(styleParam)}
    />
  );
};

export default InputComponent;
