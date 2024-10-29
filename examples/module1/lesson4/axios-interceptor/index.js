import axios from 'axios';


// Add a request interceptor
axios.interceptors.request.use(function (config) {
  console.log('Request start...');
  let seconds = 0
  config.requestStart = setInterval(() => {
    seconds++;
    console.clear();
    console.log(`Request duration: ${seconds}s`);
  }, 1000);

  return config;
});
xw
// Add a response interceptor
axios.interceptors.response.use(function (response) {
  clearInterval(response.config.requestStart)
  console.log(response.config);
  // Do something with response data
  return response;
});

const { data: { articles }, } = await axios.get('/api/data/articles?timeout=3000');

document.querySelector('#data').innerHTML = articles[0].content;
