import { createSlice } from '@reduxjs/toolkit';
const product = createSlice({
  name: 'product',
  initialState: {
    allProduct: [],
    products: [],
  },
  reducers: {
    getProductByCollection: (state, action) => {
      // const productByCollectionHandle = state.allProduct.find((item) => item.collectionHandle === action.payload);
      console.log('productByCollectionHandle', state.allProduct, action);
      // state.products = [...productByCollectionHandle.products];
    },
    getAllProduct: (state, action) => {
      console.log('action', action);
      state.allProduct = [...action.payload];
      console.log('action2', state.allProduct);
    },
  },
});
const { actions, reducer } = product;
export const { getAllProduct, getProductByCollection } = actions;
export default reducer;
