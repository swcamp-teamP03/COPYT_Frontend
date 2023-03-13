import axios from 'axios';
import { BASE_URL } from '../constants/api';

export const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${getAccessToken()}`,
  },
});
