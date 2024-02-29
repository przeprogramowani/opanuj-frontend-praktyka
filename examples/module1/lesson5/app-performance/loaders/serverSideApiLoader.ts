import { Bootstrap } from '../types/Bootstrap';

declare global {
  interface Window {
    OFE_BOOTSTRAP_DATA: Bootstrap;
  }
}

export function serverSideApiLoader() {
  return window.OFE_BOOTSTRAP_DATA;
}
