import { configureStore } from '@reduxjs/toolkit';
import cart from './cart';
const rootStore = {
  cart,
};
const store = configureStore({
  reducer: rootStore,
});
export default store;
