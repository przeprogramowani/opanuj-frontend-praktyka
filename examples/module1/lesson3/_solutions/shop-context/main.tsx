import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import CartProvider from './contexts/CartContext.js';
import ProductProvider from './contexts/ProductContext.js';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </CartProvider>
  </React.StrictMode>
);
