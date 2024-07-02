import { AxiosResponse } from 'axios';
import { ExtendedAxiosRequestConfig } from '../types/ExtendedAxiosRequestConfig';

export const requestLogger = (response: AxiosResponse) => {
  const { config, statusText } = response;
  const { url, metadata } = config as ExtendedAxiosRequestConfig;

  if (metadata) {
    const duration = new Date().getTime() - metadata.startTime.getTime();
    console.log(`Request to ${url} ${statusText} after ${duration} ms`);
  } else {
    console.log(`Request to ${url} ${statusText}`);
  }
};
