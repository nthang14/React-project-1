import { createSlice } from '@reduxjs/toolkit';
const cart = createSlice({
  name: 'cart',
  initialState: {
    listProduct: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.listProduct.push(action.payload);
    },
  },
});
const { actions, reducer } = cart;
export const { addToCart } = actions;
export default reducer;
