import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;
console.log('BASE_URL:', BASE_URL);

export const Axios = axios.create({
  baseURL: BASE_URL,
});

export type { AxiosPromise } from 'axios';
