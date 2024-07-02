import { InternalAxiosRequestConfig } from 'axios';

export interface ExtendedAxiosRequestConfig extends InternalAxiosRequestConfig {
  metadata?: { startTime: Date };
}
