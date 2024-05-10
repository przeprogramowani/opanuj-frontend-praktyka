import axios from 'axios';

const requestLogger = (config) => {
  config.metadata = {};
  config.metadata.requestTime = Date.now();

  return config;
};

const responseLogger = (response) => {
  console.log(
    `Request took ${
      Date.now() - response.config.metadata.requestTime
    } milliseconds.`
  );

  return response;
};

// Add a request interceptor
axios.interceptors.request.use(requestLogger);

// Add a response interceptor
axios.interceptors.response.use(responseLogger);

const {
  data: { articles },
} = await axios.get('/api/data/articles?timeout=3000');

document.querySelector('#data').innerHTML = articles[0].content;
