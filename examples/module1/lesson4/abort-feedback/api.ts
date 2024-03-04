import axios from 'axios';
import { User } from './types.ts';

const BASE_URL = '/api/data';
const API_ENDPOINT = '/users';
const RESPONSE_TIMEOUT = 5000;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: RESPONSE_TIMEOUT,
});

const requestLogger = (config: any) => {
  console.log(
    `Request ${config.method} into ${config.url} registered at ${new Date().toISOString()}`
  );
  return config;
};

api.interceptors.request.use(requestLogger);

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await api.get<User[]>(`${API_ENDPOINT}?timeout=10000`);
    return response.data;
  } catch (error: any) {
    console.error(`Error during fetching data: ${error.message || 'Unknown error'}`);
    throw new Error(`Error during fetching data: ${error.message || 'Unknown error'}`);
  }
};