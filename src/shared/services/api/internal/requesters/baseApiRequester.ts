import axios from 'axios';

const baseURL = import.meta.env.VITE_BACK_URL;
const TIMEOUT = 5 * 1000;

export const baseApiRequester = axios.create({
  baseURL,
  timeout: TIMEOUT,
});
