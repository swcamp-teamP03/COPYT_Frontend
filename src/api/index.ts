import axios from 'axios';
import { BASE_URL } from '../constants/api';

const token = () => {};

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${token()}`,
  },
});
