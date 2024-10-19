import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './state/cartSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productsApi } from './services/products';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
