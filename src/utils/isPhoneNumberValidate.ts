const isPhoneNumberValidate = (phoneNumber: string) => {
  const phoneNumeRule = /^[0-9]+$/g;
  return phoneNumeRule.test(phoneNumber);
};

export default isPhoneNumberValidate;
