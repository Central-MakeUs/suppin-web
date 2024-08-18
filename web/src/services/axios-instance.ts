import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  config => {
    config.headers.Authorization = `Bearer ${window.localStorage.getItem('token')}`;
    return config;
  },
  error => {
    console.error('[AXIOS_ERROR]: ', error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    if (response.config.url === '/members/login') {
      window.localStorage.setItem('token', response.data.data.token);
    }
    return response;
  },
  error => {
    if (error.response) {
      if (error.response.status === 500) {
        console.error('[AXIOS_ERROR_500]: ', error.response.data);
      }
    } else if (error.request) {
      console.error('[AXIOS_ERROR_NO_RES]:', error.request);
    } else {
      console.error('[AXIOS_ERROR_NET]: ', error.message);
    }

    return Promise.reject(error);
  }
);
