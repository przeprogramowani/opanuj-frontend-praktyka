import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CountrySearchContainer } from './containers/CountrySearchContainer.tsx';
import { NextUIProvider } from '@nextui-org/react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/countries',
    element: <CountrySearchContainer />
  }
  // Tutaj możesz dodać więcej ścieżek i komponentów
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />

      {/*<App />*/}
    </NextUIProvider>
  </React.StrictMode>
);
