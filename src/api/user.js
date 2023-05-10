import api from './index';
const resource = '/users';
const user = {
  createUser(data) {
    return api.post(resource, data);
  },
  getAllUser() {
    return api.get(resource);
  },
};
export default user;
