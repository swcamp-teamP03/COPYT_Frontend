import { SignUpInit } from '../../components/SignUp/SignupReducer';
import { api } from '..';

export const postSignUp = (userInput: SignUpInit) => {
  return api.post('/sign', userInput);
};
