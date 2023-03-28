import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const productOption = action.payload.productOption

      const itemInCart = state.cart.find(
        (item) => item.productOption.productId === productOption.productId
      );

      if (itemInCart) {
        itemInCart.productOption.quantity++;
      } else {
        state.cart.push({ 
          ...action.payload, 
          productOption: { ...productOption, quantity: 1 },
        });
      }
    },
    removeItem: (state, action) => {
      const productOption = action.payload.productOption;

      const itemInCart = state.cart.find(
        (item) => item.productOption.productId === productOption.productId
      );

      if (itemInCart.productOption.quantity === 1) {
        const removeItem = state.cart.filter(
          (item) => item.productOption.productId !== productOption.productId
        );

        state.cart = removeItem;
      } else {
        itemInCart.productOption.quantity--;
      }
    },
  },
});

export const {
  addToCart,
  removeItem,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
