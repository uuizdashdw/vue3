import axios from 'axios';
import { useAuthStore } from '../store/auth.store';

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github+json',
  },
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    const auth = useAuthStore();
    const token = auth.token || import.meta.env.VITE_GITHUB_TOKEN;

    if (!token) return config;

    config.headers.Authorization = `token ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (res) => res,
  (err) => {
    const status = err.response?.status;

    if (status === 401) console.warn('⚠️ Unauthorized (401)');
    if (status === 403) console.warn('⚠️ Rate limit exceeded (403)');

    return Promise.reject(err);
  }
);

export default api;
