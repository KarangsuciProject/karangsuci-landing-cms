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
        variant: 'outlined',
        color: 'secondary',
        slotProps: {
          input: {
            sx: {
              fontSize: {
                xs: '14px',
                sm: '16px',
                md: '18px',
                lg: '20px',
              },
              '& .MuiInputBase-input': {},
            },
          },
        },
      };

    case 'file':
      return {
        type: 'file',
        variant: 'outlined',
        color: 'secondary',
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
                    className="cursor-pointer size-5"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <EyeSlashIcon
                    className="cursor-pointer size-5"
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
