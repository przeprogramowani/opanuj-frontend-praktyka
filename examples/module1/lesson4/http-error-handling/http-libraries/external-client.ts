import axios from 'axios';

export async function getData(apiUrl: string) {
  return await axios.get(apiUrl);
}
