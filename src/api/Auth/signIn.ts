import { api } from './../index';

interface PostSignInProps {
  email: string;
  password: string;
}

export const postSignIn = ({ email, password }: PostSignInProps) => {
  return api.post('/login', { email, password });
};
