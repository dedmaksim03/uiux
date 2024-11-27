import axios from 'axios';
import { AuthResponse } from '../models/response/AuthResponse';

export const API_URL = `http://localhost:8080/api/v1`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    console.log('error.response.status');
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    console.log(error.response.status);
    if (error.response.status == 401) {
      try {
        const response = await axios.post<AuthResponse>(`${API_URL}/auth/refresh`, {}, { withCredentials: true });
        localStorage.setItem('token', response.data.token);
        return $api.request(originalRequest);
      } catch (e) {
        console.log('Не авторизован');
      }
    }
  },
);

export default $api;
