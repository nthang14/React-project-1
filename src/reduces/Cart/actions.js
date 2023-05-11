import { INCREASE_QUANTITY, DECREASE_QUANTITY, REMOVE_PRODUCT, GET_CURRENT_CART } from '~/reduces/constants';
const increaseQuantity = (payload) => {
  return {
    type: INCREASE_QUANTITY,
    payload: payload,
  };
};
const decreaseQuantity = (payload) => {
  return {
    type: DECREASE_QUANTITY,
    payload: payload,
  };
};

const removeProduct = (payload) => {
  return {
    type: REMOVE_PRODUCT,
    payload: payload,
  };
};
const getCurrentCart = (payload) => {
  return {
    type: GET_CURRENT_CART,
    payload: payload,
  };
};
export { increaseQuantity, decreaseQuantity, removeProduct, getCurrentCart };
