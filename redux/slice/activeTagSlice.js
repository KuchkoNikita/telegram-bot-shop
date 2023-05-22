import { createSlice } from '@reduxjs/toolkit';

const activeTagSlice = createSlice({
  name: 'activeTag',
  initialState: null,
  reducers: {
    setActiveTag: (state, action) => action.payload,
    clearActiveTag: () => null,
  },
});

export const {
  setActiveTag,
  clearActiveTag,
} = activeTagSlice.actions;

export const activeTagReducer = activeTagSlice.reducer;
