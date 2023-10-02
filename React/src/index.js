import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from './components/Router';
import { RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>

      <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>
);



