import { InputAdornment } from '@mui/material';
import {
  EnvelopeIcon,
  KeyIcon,
  EyeIcon,
  EyeSlashIcon,
} from '@heroicons/react/24/outline';

type StyleParam = {
  type: string;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
};

const styleConfig = ({ type, showPassword, setShowPassword }: StyleParam) => {
  if (type === 'regular') {
    return {
      label: 'Outlined',
      variant: 'outlined',
    };
  }

  if (type === 'email') {
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
  }

  if (type === 'password') {
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
  }
};

export { styleConfig };
