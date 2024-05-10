import { AxiosError } from 'axios';

export const TIMEOUT_ERROR_MSG =
  'Sorry, there seems to be connectivity issues...';

export const isAxiosTimeoutAbort = (error: AxiosError): boolean => {
  return error.code === 'ECONNABORTED';
};
