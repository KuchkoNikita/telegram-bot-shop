import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: [
    {
      count: 1,
      productInfo: {},
    }
  ],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.product = state.product.push(action.payload)
    },
    deleteProduct: (state, action) => {
      console.log('action: ', action);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, deleteProduct } = basketSlice.actions

export default basketSlice.reducer