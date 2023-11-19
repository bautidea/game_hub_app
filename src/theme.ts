import { extendTheme, ThemeConfig } from '@chakra-ui/react';

// Here we are going to customize the default theme that comes with chakra.
// We need a configuration object, of the type ThemeConfig.
const config: ThemeConfig = {
  initialColorMode: 'dark',
};

// Then we call extendTheme and pass that object with the config object, this will
// return a theme that we can store in a const.
const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: '#f9f9f9',
      100: '#ededed',
      200: '#d3d3d3',
      300: '#b3b3b3',
      400: '#a0a0a0',
      500: '#898989',
      600: '#6c6c6c',
      700: '#202020',
      800: '#121212',
      900: '#111',
    },
  },
});

export default theme;
