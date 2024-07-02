import axios from 'axios';
import { ExtendedAxiosRequestConfig } from './types/ExtendedAxiosRequestConfig';
import { requestLogger } from './utils/requestLogger';

axios.interceptors.request.use((config: ExtendedAxiosRequestConfig) => {
  config.metadata = { startTime: new Date() };
  return config;
});

axios.interceptors.response.use(
  (response) => {
    requestLogger(response);
    return response;
  },
  (error) => {
    requestLogger(error);
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
