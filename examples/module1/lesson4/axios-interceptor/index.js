import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  config.headers['start'] = new Date().getTime();

  return config;
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  const currentTime = new Date().getTime();
  const requestTime = currentTime - response.config.headers['start'];
 console.log('Request time:', requestTime);
  return response;
});

const {
  data: { articles },
} = await axios.get('/api/data/articles?timeout=5000');

document.querySelector('#data').innerHTML = articles[0].content;
