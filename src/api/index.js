import axios from 'axios';
const getAccessToken = () => {
  const token = window.localStorage.getItem('access-token');
  return token;
};
const api = axios.create({
  baseURL: 'https://accounts.lattehub.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
// }
// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.baseURL = 'https://yaviber.lattehub.com/api';
      config.baseURL = 'https://yaviber.lattehub.com/api';
      config.headers['Content-Type'] = 'application/json; charset=utf-8';
      config.headers.Authorization = 'Bearer ' + accessToken;
      config.headers['x-access-token'] = accessToken;
      config.headers['x-store-id'] = '6163b9b2eb5df8000888a0ea';
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // const accessToken = getAccessToken();
    // const config = response.config;
    // config.headers['x-access-token'] = accessToken;
    // config.headers['x-store-id'] = '6163b9b2eb5df8000888a0ea';
    // config.headers.baseURL = 'https://yaviber.lattehub.com/api';
    // config.baseURL = 'https://yaviber.lattehub.com/api';
    return response.data;
  },
  function (error) {
    console.log('res', error);

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);
export default api;
