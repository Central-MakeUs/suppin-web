import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: '/api', // TODO: 개발 환경과 실서버 환경시 url 다르게 설정
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.error('[AXIOS_ERROR]: ', error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
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
