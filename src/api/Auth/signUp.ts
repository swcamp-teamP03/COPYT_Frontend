import { Email, SignUpInit } from '../../components/SignUp/SignupReducer';
import { api } from '..';

export const postSignUp = (userInput: SignUpInit) => {
  return api.post('/sign', { ...userInput });
};

export const sendEmail = async (email: string): Promise<Email | null> => {
  const res = await api.post(`/sign/sendMail?email=${email}`);
  if (res.data.success) {
    return res.data.data;
  }
  return null;
};

export const confirmEmail = async (email: string, certificationNumber: number): Promise<Email | null> => {
  const res = await api.post(`/sign/mailConfirm?email=${email}certificationNumber=${certificationNumber}`);
  if (res.data.success) {
    return res.data.data;
  }
  return null;
};
