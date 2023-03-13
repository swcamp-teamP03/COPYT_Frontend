import { api } from './../index';

interface PostSignInProps {
  email: string;
  password: string;
}

export const postSignIn = async ({ email, password }: PostSignInProps) => {
  const res = await api.post('/login', { email, password });
  localStorage.setItem('accessToken', res.data.token);
  return res.data;
};
