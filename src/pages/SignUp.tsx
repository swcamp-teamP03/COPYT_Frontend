import React, { FormEvent, useReducer, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import SignUpForm from '../components/SignUp/SignUpForm';
import { signupInit, singUpReducer } from '../components/SignUp/SignupReducer';
import SignUpTOS, { TOS, TOS_LIST } from '../components/SignUp/TOS';
import useError from '../hooks/useError';
import useSignUpMutation from '../quries/Auth/useSignUpMutation';
import iscompanyValidate from '../utils/iscompanyValidate';
import isEmailValidate from '../utils/isEmailValidate';
import isPasswordValidate from '../utils/isPasswordValidate';
import ispersonValidate from '../utils/isusernameValidate';
import isPhoneNumberValidate from '../utils/isPhoneNumberValidate';

const SignUp = () => {
  const [userInput, userInputDispatch] = useReducer(singUpReducer, signupInit);
  const [selectedTOS, setSelectedTOS] = useState<TOS[]>([]);
  const { mutate: signUpMutate } = useSignUpMutation();

  const [isError, setError] = useError({
    email: false,
    password: false,
    passwordCheck: false,
    phoneNumber: false,
    company: false,
    username: false,
  });

  //에러 부분에 대해서 기본을 false로 설정
  const isFormValidate = () => {
    const { email, password, passwordCheck, phoneNumber, company, username } = userInput;
    return [
      setError('email', !isEmailValidate(email)),
      setError('password', !isPasswordValidate(password)),
      setError('passwordCheck', password !== passwordCheck),
      setError('phoneNumber', !isPhoneNumberValidate(phoneNumber)),
      setError('company', !iscompanyValidate(company)),
      setError('username', !ispersonValidate(username)),
    ];
  };

  // userInput 부분에  조건에 맞는지 확인하고
  const isAllChecked = selectedTOS.length === TOS_LIST.length;
  const isAbledTOS = selectedTOS.filter((tos) => tos.isRequired).length === TOS_LIST.filter((tos) => tos.isRequired).length;

  const isDisabledSubmit = Object.values(userInput).includes('') || !isAbledTOS;

  const onSubmit = async () => {
    const formErrors = isFormValidate();
    if (!formErrors.includes(true)) {
      signUpMutate(userInput);
    }
  };

  return (
    <Container>
      <SignUpForm userInputDispatch={userInputDispatch} isError={isError} />
      <SignUpTOS selectedTOS={selectedTOS} setSelectedTOS={setSelectedTOS} isAllChecked={isAllChecked} />
      <Button title="회원가입" buttonSize="buttonL" buttonColor="white" onButtonClick={onSubmit} isDisabled={isDisabledSubmit} />
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  width: 384px;
  margin: auto;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
