import { createTheme } from '@mui/material/styles';

// const { palette } = createTheme();
// const { augmentColor } = palette;
// const createColor = (customColor: string) =>
//   augmentColor({ color: { main: customColor } });

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2E7D32',
    },
    secondary: {
      main: '#00A765',
    },
  },
  typography: {
    fontFamily: [
      'Inter Tight',
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
