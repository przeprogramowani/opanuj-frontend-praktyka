import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../types/Product';

interface ProductsSlace {
  products: Product[];
}

const initialState: ProductsSlace = {
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export const {} = productsSlice.actions;

export const productReducer = productsSlice.reducer;
