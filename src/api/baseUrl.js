import axios from 'axios';

export const BASE_URL = ' https://orderlies-555f0367f3ea.herokuapp.com/api/v1';

export const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});