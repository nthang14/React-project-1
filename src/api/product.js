import api from './index';
const source_product = `/products`;
const source_category = '/collections';
const product = {
  getProductsByCategory(idCollection, params) {
    return api.get(`${source_product}${source_category}/${idCollection}`, { params });
  },
  getAllProduct(params) {
    return api.get(source_product, { params });
  },
  getProductDetail(id) {
    return api.get(`${source_product}/${id}`);
  },
};

export default product;
