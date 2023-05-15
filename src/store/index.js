import { configureStore } from '@reduxjs/toolkit';
import cart from './cart';
import product from './product';
import collection from './collection';
import home from './home';
const rootStore = {
  cart,
  product,
  collection,
  home,
};
const store = configureStore({
  reducer: rootStore,
});
export default store;
