import api from './index';
const resource_cart = '/carts';
const resource_user = '/user';
const cart = {
  getCartByUserId(userId = 1) {
    return api.get(`${resource_cart}${resource_user}/${userId}`);
  },
};
export default cart;
