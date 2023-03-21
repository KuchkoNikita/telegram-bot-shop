import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [{
    pods: [],
    hookah: [],
    liquid: []
  }],
  reducers: {
    addToCart: (state, action) => {
      state.cart.push({ ...action.payload, quantity: 0 });
    },
  },
});

export const {
  addToCart,
  removeItem,
} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
