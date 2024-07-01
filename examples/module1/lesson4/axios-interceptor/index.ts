import axios, { InternalAxiosRequestConfig } from 'axios';

const requestLogger = (config: InternalAxiosRequestConfig, success: boolean) => {
  const duration = new Date().getTime() - new Date(config.headers['Request-Start-Time']).getTime();
  const status = success ? 'succeeded' : 'failed';
  console.log(`Request to ${config.url} ${status} after ${duration} ms`);
};

axios.interceptors.request.use((config) => {
  config.headers['Request-Start-Time'] = new Date().toISOString();
  return config;
});

axios.interceptors.response.use(
  (response) => {
    requestLogger(response.config, true);
    return response;
  },
  (error) => {
    requestLogger(error.config, false);
    return Promise.reject(error);
  }
);

const API_URL = '/api/data/articles?timeout=3000';

const fetchData = async () => {
  try {
    const {
      data: { articles },
    } = await axios.get(API_URL);
    document.querySelector('#data')!.innerHTML = articles[0].content;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();
