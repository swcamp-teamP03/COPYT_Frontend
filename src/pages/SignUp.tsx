import React, { useReducer, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import SignUpForm from '../components/SignUp/SignUpForm';
import { signupInit, singUpReducer } from '../components/SignUp/SignupReducer';
import SignUpTOS, { TOS, TOS_LIST } from '../components/SignUp/TOS';
import useError from '../hooks/useError';
import isEmailValidate from '../utils/isEmailValidate';
import isPasswordValidate from '../utils/isPasswordValidate';
import isPhoneNumberValidate from '../utils/isPhoneNumberValidate';

const SignUp = () => {
  const [userInput, userInputDispatch] = useReducer(singUpReducer, signupInit);
  const [selectedTOS, setSelectedTOS] = useState<TOS[]>([]);

  const [isError, setError] = useError({
    email: false,
    password: false,
    passwordCheck: false,
    managerPhoneNumber: false,
    mainPhoneNumber: false,
  });

  const isFormValidate = () => {
    const { email, password, passwordCheck, mainPhoneNumber, managerPhoneNumber } = userInput;
    return [
      setError('email', !isEmailValidate(email)),
      setError('password', !isPasswordValidate(password)),
      setError('passwordCheck', password !== passwordCheck),
      setError('mainPhoneNumber', !isPhoneNumberValidate(mainPhoneNumber)),
      setError('managerPhoneNumber', !isPhoneNumberValidate(managerPhoneNumber)),
    ];
  };
  const isAllChecked = selectedTOS.length === TOS_LIST.length;
  const isAbledTOS = selectedTOS.filter((tos) => tos.isRequired).length === TOS_LIST.filter((tos) => tos.isRequired).length;

  const isDisabledSubmit = Object.values(userInput).includes('') || !isAbledTOS;

  return (
    <Container>
      <SignUpForm userInputDispatch={userInputDispatch} isError={isError} />
      <SignUpTOS selectedTOS={selectedTOS} setSelectedTOS={setSelectedTOS} isAllChecked={isAllChecked} />
      <Button title="회원가입" buttonSize="buttonL" buttonColor="black" isDisabled={isDisabledSubmit} onButtonClick={isFormValidate} />
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  width: 382px;
  margin: auto;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
