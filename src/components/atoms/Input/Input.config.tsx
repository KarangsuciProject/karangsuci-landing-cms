import { InputAdornment } from '@mui/material';
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
}: StyleParamProps) => {
  switch (type) {
    case 'regular':
      return {
        label: 'Outlined',
        variant: 'outlined',
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

    default:
      break;
  }
};

export { styleConfig };
