import api from './index';
const source_category = (handle) => `/products/category/${handle}`;

const product = {
  getProductsByCategory(collectionHandle) {
    return api.get(source_category(collectionHandle));
  },
};

export default product;
