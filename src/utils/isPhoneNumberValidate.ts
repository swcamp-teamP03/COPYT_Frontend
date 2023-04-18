const isPhoneNumberValidate = (phoneNumber: string) => {
  const phoneNumeRule = /^010-?([0-9]{3,4})-?([0-9]{4})$/;
  return phoneNumeRule.test(phoneNumber);
};

export default isPhoneNumberValidate;
