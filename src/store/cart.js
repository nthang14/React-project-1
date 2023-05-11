import { createSlice } from '@reduxjs/toolkit';
const cart = createSlice({
  name: 'cart',
  initialState: {
    orders: [],
    currentCart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.currentCart.push(action.payload);
    },
    getCurrentCart: (state, action) => {
      state.currentCart = [...action.payload];
    },
    increaseQuantity: (state, action) => {
      console.log('product', action, state.currentCart);
      const { payload } = action;
      const product = state.currentCart.find((item) => item.id === payload.id);
      console.log('product', product);

      // if (!!product) {
      //   Object.assign(product, { quantity: product.quantity + 1 });
      //   console.log('product', product);
      // }
      console.log('action', action);
    },
    decreaseQuantity: (state, action) => {},
    removeProduct: (state, action) => {},
    getOrder: (state, action) => {
      state.orders.push(...action.payload);
    },
  },
});
const { actions, reducer } = cart;
export const { addToCart, getCurrentCart, getOrder, increaseQuantity, decreaseQuantity, removeProduct } = actions;
export default reducer;
