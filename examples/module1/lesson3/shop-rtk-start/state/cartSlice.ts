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
        cartItem.amount += 1;
      } else {
        const newItem = { ...action.payload, amount: 1 };
        state.items.push(newItem);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const newCart = state.items.filter((item) => {
        return item.id !== action.payload;
      });
      state.items = newCart;
    },
    decreaseAmount: (state, action: PayloadAction<number>) => {
      console.log(action);
      const cartItem = state.items.find((item) => item.id === action.payload);

      if (!cartItem) {
        return;
      }

      if (cartItem.amount <= 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        cartItem.amount -= 1;
      }
    },
  },
});

export const { addToCart, clearCart, removeFromCart, decreaseAmount } =
  cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectItemAmount = (state: RootState) =>
  state.cart.items.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount;
  }, 0);

export const selectTotalAmount = (state: RootState) => {
  return state.cart.items.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.amount;
  }, 0);
};

export default cartSlice.reducer;
