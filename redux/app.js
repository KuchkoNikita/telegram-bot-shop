import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './actions/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})