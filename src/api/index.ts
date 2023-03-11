import axios from 'axios';
import { BASE_URL } from '../constants/api';

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    Authorization:
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJKd3RUb2tlbiIsIlVTRVJfRU1BSUwiOiJhYWFhQG5hdmVyLmNvbSIsImV4cCI6MTY3OTM3Mjk4NH0.AphgnOG8Y4PTgvC-_XqUq7sys-dcgzlkHufxCXCHbDj8ll1aQ_42Y4OcFjqhdMtg9pJAuENIcoXcnCM0Kxdo9Q',
  },
});
