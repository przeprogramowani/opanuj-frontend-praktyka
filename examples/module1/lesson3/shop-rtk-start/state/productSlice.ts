import { createSlice } from '@reduxjs/toolkit';
import { CartItem } from '../types/CartItem';

interface ProductSlace {
  items: CartItem[];
}

const initialState: ProductSlace = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export const {} = cartSlice.actions;

export const productReducer = cartSlice.reducer;
