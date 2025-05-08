import { createTheme } from '@mui/material/styles';

import { PaletteConstant } from '../constants';

const { primary, secondary, textPrimary, textSecondary } =
  PaletteConstant.colors;

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: primary.main,
    },
    secondary: {
      main: secondary.main,
    },
    text: {
      primary: textPrimary.main,
      secondary: textSecondary.main,
    },
  },
  typography: {
    fontFamily: [
      'Outfit',
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
