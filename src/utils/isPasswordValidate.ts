import { SIGNUP_MESSAGE } from '../constants/authMessage';

const isPasswordValidate = (password: string) => {
  const passwordRule = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/g;
  const result = passwordRule.test(password);
  return result ? '' : SIGNUP_MESSAGE.PASSWORD;
};

export default isPasswordValidate;
