 import axios from 'axios';

const DOMAIN = 'http://localhost:3001/api';

const config = {
  baseURL: DOMAIN,
  timeout: 100000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Pragma: 'no-cache',
  },
  params: {},
};

const api = axios.create(config);

export default api;
