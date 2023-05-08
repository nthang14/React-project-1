import axios from 'axios';
let access_token = null;

if (!localStorage.getItem('access_token')) {
  axios({
    method: 'post',
    url: 'https://accounts.lattehub.com/api/auth/login',
    data: {
      email: 'lappham1408@gmail.com',
      password: 'Lappham1408',
    },
  }).then(({ data }) => {
    localStorage.setItem('access_token', data.accessToken);
    access_token = data.accessToken;
  });
} else {
  access_token = localStorage.getItem('access_token');
}
const api = axios.create({
  baseURL: 'https://yaviber.lattehub.com/api',
  headers: {
    Authorization: `Bearer ${access_token}`,
    'Content-Type': 'application/json',
  },
});
// }
// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
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
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);
export default api;
