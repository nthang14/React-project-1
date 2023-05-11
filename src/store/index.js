import { configureStore } from '@reduxjs/toolkit';
import cart from './cart';
import product from './product';
const rootStore = {
  cart,
  product,
};
const store = configureStore({
  reducer: rootStore,
});
export default store;
