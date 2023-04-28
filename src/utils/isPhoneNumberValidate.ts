import { SIGNUP_MESSAGE } from '../constants/authMessage';

const isPhoneNumberValidate = (phoneNumber: string) => {
  const phoneNumeRule = /^010-?([0-9]{3,4})-?([0-9]{4})$/;
  const result = phoneNumeRule.test(phoneNumber);
  return result ? '' : SIGNUP_MESSAGE.PHONENUMBER;
};

export default isPhoneNumberValidate;
