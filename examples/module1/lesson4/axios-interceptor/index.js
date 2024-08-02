import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  config.metadata = { startTime: new Date() };
  return config;
});

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    const endTime = new Date();
    const duration = endTime - response.config.metadata.startTime;
    console.log(`Czas oczekiwania na API: ${duration} ms`);
    return response;
  },
  function (error) {
    const endTime = new Date();
    const duration = endTime - error.config.metadata.startTime;
    console.log(`Czas oczekiwania na API: ${duration} ms`);
    return Promise.reject(error);
  }
);

const {
  data: { articles },
} = await axios.get('/api/data/articles?timeout=3000');

document.querySelector('#data').innerHTML = articles[0].content;
