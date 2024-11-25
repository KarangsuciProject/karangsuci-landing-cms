import { createTheme } from '@mui/material/styles';

import { palette } from '../constants';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: palette.primary.main,
    },
    secondary: {
      main: palette.secondary.main,
    },
  },
  typography: {
    fontFamily: [
      'Work Sans',
      'Inter',
      'system-ui',
      'Avenir',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

export default theme;
