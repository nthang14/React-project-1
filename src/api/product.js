import api from './index';
const source_product = `/products`;
const source_category = '/category';
const product = {
  getProductsByCategory(idCollection, params) {
    return api.get(`${source_product}${source_category}/${idCollection}`, params);
  },
  getAllProduct(params) {
    return api.get(source_product, { limit: 100, page: 1 });
  },
};

export default product;
