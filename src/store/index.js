import { configureStore } from '@reduxjs/toolkit';
import cart from './cart';
import product from './product';
import collection from './collection';
const rootStore = {
  cart,
  product,
  collection,
};
const store = configureStore({
  reducer: rootStore,
});
export default store;
