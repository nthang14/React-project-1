import api from './index';
const resource = `/auth/login`;
const auth = {
  login(data) {
    return api.post(resource, data);
  },
};
export default auth;
