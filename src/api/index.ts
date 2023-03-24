import axios from 'axios';
import { BASE_URL } from '../constants/api';

export const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const accessToken = getAccessToken();
  if (config.headers && accessToken && !config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});
