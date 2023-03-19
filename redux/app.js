import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './actions/basketSlice';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
})