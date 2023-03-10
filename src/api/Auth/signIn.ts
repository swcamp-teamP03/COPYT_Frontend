import { api } from './../index';

interface PostSignInProps {
  email: string;
  password: string;
}

export const postSignIn = async ({ email, password }: PostSignInProps) => {
  const res = await api.post('/login', { email, password });

  return res.data;
};
