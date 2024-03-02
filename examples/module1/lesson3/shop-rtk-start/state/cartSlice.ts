import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartItem } from '../types/CartItem';
import { RootState } from '../store';
import { Product } from '../types/Product';

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product | CartItem>) => {
      const cartItem = state.items.find((item) => {
        return item.id === action.payload.id;
      });

      if (cartItem) {
        state.items = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, amount: cartItem.amount + 1 }
            : item
        );
      } else {
        const newItem = { ...action.payload, amount: 1 };
        state.items.push(newItem);
      }
    },
    decreaseAmount: (state, action: PayloadAction<Product | CartItem>) => {
      const cartItem = state.items.find((item) => {
        return item.id === action.payload.id;
      });

      if(cartItem && cartItem.amount > 1) {
        state.items = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, amount: cartItem.amount - 1 }
            : item
        );
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeItem: (state, action: PayloadAction<Product | CartItem>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    }
  },
});

export const { addToCart, clearCart, decreaseAmount, removeItem } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectItemAmount = (state: RootState) =>
  state.cart.items.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount;
  }, 0);

export const selectTotalPrice = (state: RootState) => {
  return state.cart.items.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount * currentItem.price;
  }, 0);
}

export default cartSlice.reducer;
