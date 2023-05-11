import { createSlice } from '@reduxjs/toolkit';
const product = createSlice({
  name: 'product',
  initialState: {
    products: [],
  },
  reducers: {
    getAllProduct(state, action) {
      state.products.push(...action.payload);
    },
  },
});
const { actions, reducer } = product;
export const { getAllProduct } = actions;
export default reducer;
