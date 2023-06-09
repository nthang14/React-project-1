import api from './index';
const source_category = `/collections`;
const category = {
  getAllCategory(params) {
    return api.get(source_category, { params: params });
  },
  getAllProductByCategory(id) {
    return api.get(`${source_category}/${id}`);
  },
  getCollectionDetail(id) {
    return api.get(`${source_category}/${id}`);
  },
};
export default category;
