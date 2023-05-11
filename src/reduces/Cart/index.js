import { increaseQuantity, decreaseQuantity, removeProduct, getCurrentCart } from './actions';
import { INCREASE_QUANTITY, DECREASE_QUANTITY, REMOVE_PRODUCT, GET_CURRENT_CART } from '~/reduces/constants';

export const initialState = {
  currentCart: [],
};
const reducer = (state, action) => {
  let newState = 'test';
  switch (action.type) {
    case GET_CURRENT_CART:
      console.log('action', action, state);
      break;
    case INCREASE_QUANTITY:
      console.log('action', action);
      break;
    case DECREASE_QUANTITY:
      console.log('action', action);
      break;
    case REMOVE_PRODUCT:
      console.log('action', action);
      break;

    default:
      break;
  }
  return newState;
};
export default reducer;
