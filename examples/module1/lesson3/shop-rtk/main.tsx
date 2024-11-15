import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.js';
import CartProvider from './contexts/CartContext.js';
import ProductProvider from './contexts/ProductContext.js';
import './index.css';
import { store } from './store.js';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CartProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </CartProvider>
    </Provider>
  </React.StrictMode>
);
