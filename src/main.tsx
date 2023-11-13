// Importing stuff from react
import React from 'react';
import ReactDOM from 'react-dom/client';
// Importing third party libraries.
import { ChakraProvider } from '@chakra-ui/react';
// Importing own import statements.
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
