import { InputAdornment } from '@mui/material';
import type { TextFieldProps } from '@mui/material';
import {
  EnvelopeIcon,
  KeyIcon,
  EyeIcon,
  EyeSlashIcon,
} from '@heroicons/react/24/outline';

import type { StyleParamProps } from './Input.types';

const styleConfig = ({
  type,
  showPassword,
  setShowPassword,
}: StyleParamProps): TextFieldProps | undefined => {
  switch (type) {
    case 'regular':
      return {
        label: 'Outlined',
        variant: 'outlined',
        slotProps: {
          input: {
            sx: {
              fontSize: {
                xs: '14px',
                sm: '16px',
                md: '18px',
                lg: '20px',
              },
            },
          },
        },
      };

    case 'email':
      return {
        required: true,
        id: 'email',
        variant: 'outlined',
        color: 'secondary',
        size: 'small',
        slotProps: {
          input: {
            sx: {
              fontSize: {
                xs: '14px',
                sm: '16px',
                md: '18px',
                lg: '20px',
              },
            },
            startAdornment: (
              <InputAdornment position="start">
                <EnvelopeIcon className="size-5" />
              </InputAdornment>
            ),
          },
        },
      };

    case 'password':
      return {
        required: true,
        id: 'password',
        variant: 'outlined',
        color: 'secondary',
        type: showPassword ? 'text' : 'password',
        size: 'small',
        slotProps: {
          input: {
            sx: {
              fontSize: {
                xs: '14px',
                sm: '16px',
                md: '18px',
                lg: '20px',
              },
            },
            startAdornment: (
              <InputAdornment position="start">
                <KeyIcon className="size-5" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {showPassword ? (
                  <EyeIcon
                    className="size-5 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <EyeSlashIcon
                    className="size-5 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </InputAdornment>
            ),
          },
        },
      };
  }
};

export { styleConfig };
