import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);

      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      console.log('action: ', action);
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      console.log('itemInCart: ', itemInCart);

      if (itemInCart.quantity === 1) {
        const removeItem = state.cart.filter((item) => item.id !== action.payload.id);
        state.cart = removeItem;
      } else {
        itemInCart.quantity--;
      }
    },
  },
});

export const {
  addToCart,
  removeItem,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
