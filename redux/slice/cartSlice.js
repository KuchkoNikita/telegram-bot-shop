import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { productOption } = action.payload;

      const itemInCart = state.find(
        (item) => item.productOption.productId === productOption.productId,
      );

      if (itemInCart) {
        itemInCart.productOption.quantity += 1;
      } else {
        state.push({
          ...action.payload,
          productOption: { ...productOption, quantity: 1 },
        });
      }
    },
    removeItem: (state, action) => {
      const { productOption } = action.payload;

      const itemInCart = state.find(
        (item) => item.productOption.productId === productOption.productId,
      );

      if (itemInCart.productOption.quantity === 1) {
        const removeItem = state.filter(
          (item) => item.productOption.productId !== productOption.productId,
        );

        return removeItem;
      }

      itemInCart.productOption.quantity -= 1;
    },
  },
});

export const {
  addToCart,
  removeItem,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
