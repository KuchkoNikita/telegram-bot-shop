import { createSlice } from '@reduxjs/toolkit';

const tagSlice = createSlice({
  name: 'tag',
  initialState: {
    activeTag: '',
  },
  reducers: {
    setActiveTag: (state, action) => {
      const newActiveTag = action.payload;

      state.tag.activeTag = newActiveTag;
    },
    clearActiveTag: (state) => {
      state.tag.activeTag = '';
    },
  },
});

export const {
  addToCart,
  removeItem,
} = tagSlice.actions;

export const tagReducer = tagSlice.reducer;
