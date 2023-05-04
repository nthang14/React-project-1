import api from './index';
const source_category = `/products/categories`;
const category = {
  getAllCategory(params) {
    return api.get(source_category, { params: params });
  },
};
export default category;
