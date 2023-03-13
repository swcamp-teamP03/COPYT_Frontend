const isPasswordValidate = (password: string) => {
  const passwordRule = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/g;
  return passwordRule.test(password);
};

export default isPasswordValidate;
