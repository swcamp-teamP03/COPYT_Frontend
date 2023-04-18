const iscompanyValidate = (company: string) => {
  const companyRule = /.+/;
  return companyRule.test(company);
};

export default iscompanyValidate;
