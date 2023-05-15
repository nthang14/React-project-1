import { createSlice, current } from '@reduxjs/toolkit';
const product = createSlice({
  name: 'product',
  initialState: {
    allProduct: [],
    products: [],
    isDialog: false,
    productDetail: {},
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
    getProductById: (state, action) => {
      console.log(current(state.products));
      state.productDetail = state.products.find((item) => item._id === action.payload);
    },
  },
});
const { actions, reducer } = product;
export const { getAllProduct, getProductByCollection, getProductById } = actions;
export default reducer;
