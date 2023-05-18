import api from './index';
const source_product = `/products?page=1&limit=50`;
const source_category = '/category';
const source_collection = '/products/collections/645859b2f555f30009a063e6?limit=10&page=1&sort=alphaAsc';
const product = {
  getProductsByCategory(idCollection, params) {
    return api.get(`${source_product}${source_category}/${idCollection}`, params);
  },
  getAllProduct(params) {
    return api.get(source_product, { limit: 100, page: 1, sort: 'alphaAsc' });
  },
};

export default product;
