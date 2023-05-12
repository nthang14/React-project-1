import { createSlice } from '@reduxjs/toolkit';
const product = createSlice({
  name: 'product',
  initialState: {
    allProduct: [],
    products: [],
    isDialog: false,
  },
  reducers: {
    getProductByCollection: (state, action) => {
      const { allProducts, collectionHandle } = action.payload;
      const productByCollectionHandle = allProducts.find((item) => item.collectionHandle === collectionHandle);
      state.products = [...productByCollectionHandle.products];
    },
    getAllProduct: (state, action) => {
      state.allProduct = [...action.payload];
    },
    setDialog: (state, action) => {
      state.isDialog = action.payload;
    },
  },
});
const { actions, reducer } = product;
export const { getAllProduct, getProductByCollection } = actions;
export default reducer;
