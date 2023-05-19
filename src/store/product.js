import { createSlice, current } from '@reduxjs/toolkit';
const product = createSlice({
  name: 'product',
  initialState: {
    allProduct: [],
    products: [],
    isModal: false,
    productDetail: null,
  },
  reducers: {
    getProductByCollection: (state, action) => {
      state.products = [...action.payload];
    },
    getAllProduct: (state, action) => {
      state.allProduct = [...action.payload];
    },

    getProductById: (state, action) => {
      state.productDetail = state.products.find((item) => item._id === action.payload);
    },
    setModal: (state, action) => {
      state.isModal = action.payload;
    },
    setProductDetail: (state, action) => {
      state.productDetail = action.payload;
    },
  },
});
const { actions, reducer } = product;
export const { getAllProduct, getProductByCollection, getProductById, setModal, setProductDetail } = actions;
export default reducer;
