import { createSlice, current, createSelector } from '@reduxjs/toolkit';
const cart = createSlice({
  name: 'cart',
  initialState: {
    orders: [],
    currentCart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { payload } = action;
      const product = state.currentCart.find((item) => item._id === payload._id);
      if (!!product) {
        product.quantity = product.quantity + payload.quantity;
      } else {
        state.currentCart.push(action.payload);
      }
      localStorage.setItem('cart/current', JSON.stringify(state.currentCart));
    },
    getCurrentCart: (state, action) => {
      state.currentCart = [...action.payload];
    },
    increaseQuantity: (state, action) => {
      const { payload } = action;
      const product = state.currentCart.find((item) => item._id === payload._id);
      product.quantity = product.quantity + 1;
    },
    decreaseQuantity: (state, action) => {
      const { payload } = action;
      const product = state.currentCart.find((item) => item._id === payload._id);
      product.quantity = product.quantity - 1;
    },
    removeProduct: (state, action) => {
      const { payload } = action;
      const indexProduct = state.currentCart.findIndex((item) => item._id === payload._id);
      state.currentCart.splice(indexProduct, 1);
    },
    getOrder: (state, action) => {
      state.orders.push(...action.payload);
    },
  },
});
const { actions, reducer } = cart;
export const { addToCart, getCurrentCart, getOrder, increaseQuantity, decreaseQuantity, removeProduct } = actions;
export default reducer;

export const selectorCart = createSelector(
  (state) => {
    return state.cart.currentCart;
  },
  (currentCart) => {
    let total = currentCart.reduce(
      (total, currentProduct) => total + currentProduct.price * currentProduct.quantity,
      0,
    );
    return total.toFixed(2);
  },
);
