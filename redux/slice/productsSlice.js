import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    pods: [],
    hookah: [],
    liquid: []
  },
  reducers: {
    load: () => {
      state[action.payload.type] = action.payload.state;
    },
    addToCart: (state, action) => {
      state.pods.push({ ...action.payload, quantity: 0 });
    },
  },
});

export const {
  load,
  addToCart,
} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
