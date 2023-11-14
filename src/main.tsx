// Importing stuff from react
import React from 'react';
import ReactDOM from 'react-dom/client';
// Importing third party libraries.
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
// Importing own import statements.
import App from './App';
import theme from './theme'; // --> custom default theme for chakra
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {/* We need to add another component to set the initial color mode*/}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
