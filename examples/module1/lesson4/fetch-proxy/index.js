import { v4 as uuidv4 } from 'uuid';

const fetchProxy = new Proxy(fetch, {
  apply(target, thisArg, argumentsList) {
    let [url, cfg] = argumentsList;
    const newHeader = { 'x-req-id': `kurs-${uuidv4()}` };
    return target(url, {
      ...cfg,
      headers: {
        ...cfg?.headers,
        ...newHeader,
      },
    });
  },
});

fetchProxy('/api/users.json')
  .then((response) => response.json())
  .then((data) => console.log(data));
