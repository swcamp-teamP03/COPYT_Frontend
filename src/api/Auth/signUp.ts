import { Email, SignUpInit } from '../../components/SignUp/SignupReducer';
import { api } from '..';

export const postSignUp = (userInput: SignUpInit) => {
  return api.post('/sign', { ...userInput });
};

export const sendEmail = async (email: string): Promise<Email | null> => {
  const res = await api.post('/sign/sendMail', { email });
  if (res.data.success) {
    return res.data.data;
  }
  return null;
};

export const checkEmail = async (email: string, certificationNumber: number): Promise<Email | null> => {
  const res = await api.post('/sign/mailConfirm', { email, certificationNumber });
  if (res.data.success) {
    return res.data.data;
  }
  return null;
};
