import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import CartProvider from './contexts/CartContext.js';
import ProductProvider from './contexts/ProductContext.js';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
  </React.StrictMode>
);
