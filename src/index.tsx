import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { App } from './App';

const app = document.getElementById('app');
ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  app
);
