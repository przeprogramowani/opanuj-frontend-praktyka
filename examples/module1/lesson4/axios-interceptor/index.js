const fetchHandler = {
  apply: async (target, __, args) => {
    let [url, options] = args;

    const startTime = Date.now();
    const response = await target(url, options);
    const endTime = Date.now() - startTime;

    console.log(`Request to ${url} took ${endTime}ms`);

    return response;
  },
};

const proxiedFetch = new Proxy(fetch, fetchHandler);
const response = await proxiedFetch('/api/data/articles?timeout=3000');
const data = await response.json();

document.querySelector('#data').innerHTML = data[0].content;
