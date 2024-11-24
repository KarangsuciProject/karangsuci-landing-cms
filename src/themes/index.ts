import { createTheme, PaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomPalette {
    brand: PaletteColorOptions;
    light: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (customColor: string) =>
  augmentColor({ color: { main: customColor } });

const theme = createTheme({
  palette: {
    brand: createColor('#035A37'),
    light: createColor('#00A765'),
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
