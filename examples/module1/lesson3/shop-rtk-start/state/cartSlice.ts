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

const removeItemFromCart = (
  state: CartState,
  action: PayloadAction<number>
) => {
  const newCart = state.items.filter((item) => item.id !== action.payload);
  state.items = newCart;
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
    decreaseAmount: (state, action: PayloadAction<number>) => {
      const cartItem = state.items.find((item) => {
        return item.id === action.payload;
      });
      console.log(cartItem);

      if (!cartItem) {
        return;
      }

      if (cartItem.amount <= 1) {
        removeItemFromCart(state, action);
      }

      const newCart = state.items.map((item) =>
        item.id === action.payload
          ? { ...item, amount: cartItem.amount - 1 }
          : item
      );

      state.items = newCart;
    },
    removeFromCart: (state, action: PayloadAction<number>) =>
      removeItemFromCart(state, action),
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, decreaseAmount, removeFromCart, clearCart } =
  cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectItemAmount = (state: RootState) =>
  state.cart.items.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount;
  }, 0);
export const selectTotalPrice = (state: RootState) =>
  state.cart.items.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.amount;
  }, 0);

export default cartSlice.reducer;
