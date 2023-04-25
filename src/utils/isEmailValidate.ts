import { SIGNUP_MESSAGE } from '../constants/authMessage';

const isEmailValidate = (email: string) => {
  const emailRule = new RegExp('^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$');
  const result = emailRule.test(email);

  return result ? '' : SIGNUP_MESSAGE.EMAIL;
};

export default isEmailValidate;
