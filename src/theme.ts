import { extendTheme, ThemeConfig } from '@chakra-ui/react';

// Here we are going to customize the default theme that comes with chakra.
// We need a configuration object, of the type ThemeConfig.
const config: ThemeConfig = {
  initialColorMode: 'dark',
};

// Then we call extendTheme and pass that object with the config object, this will
// return a theme that we can store in a const.
const theme = extendTheme({ config });

export default theme;
