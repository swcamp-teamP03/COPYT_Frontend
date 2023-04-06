const isusernameValidate = (username: string) => {
  const usernameRule = /.+/;
  return usernameRule.test(username);
};

export default isusernameValidate;
