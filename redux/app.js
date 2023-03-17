import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './actions/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})