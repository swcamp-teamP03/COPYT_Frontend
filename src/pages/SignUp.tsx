import React, { FormEvent, useEffect, useReducer, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import SignUpForm from '../components/SignUp/SignUpForm';
import { signupInit, singUpReducer } from '../components/SignUp/SignupReducer';
import SignUpTOS, { TOS, TOS_LIST } from '../components/SignUp/TOS';
import useError from '../hooks/useError';
import useSignUpMutation from '../quries/Auth/useSignUpMutation';
import isEmailValidate from '../utils/isEmailValidate';
import isPasswordValidate from '../utils/isPasswordValidate';
import isPhoneNumberValidate from '../utils/isPhoneNumberValidate';
import { GNB_SVG } from '../assets/GNB';
import { SIGNUP_MESSAGE } from '../constants/authMessage';

const SignUp = () => {
  const [userInput, userInputDispatch] = useReducer(singUpReducer, signupInit);
  const [selectedTOS, setSelectedTOS] = useState<TOS[]>([]);
  const { mutate: signUpMutate } = useSignUpMutation();

  const [isError, setError] = useError({
    email: '',
    password: '',
    passwordCheck: '',
    phoneNumber: '',
    company: '',
    username: '',
    certification: '',
  });

  const isFormValidate = () => {
    const { email, password, passwordCheck, phoneNumber, certification } = userInput;
    return [
      setError('email', isEmailValidate(email)),
      setError('certification', certification === false ? SIGNUP_MESSAGE.CERTIFICATIOM : ''),
      setError('password', isPasswordValidate(password)),
      setError('passwordCheck', password !== passwordCheck ? SIGNUP_MESSAGE.PASSWORD_MATCH : ''),
      setError('phoneNumber', isPhoneNumberValidate(phoneNumber)),
    ];
  };

  const isAllChecked = selectedTOS.length === TOS_LIST.length;
  const isAbledTOS = selectedTOS.filter((tos) => tos.isRequired).length === TOS_LIST.filter((tos) => tos.isRequired).length;

  const isDisabledSubmit = Object.values(userInput).includes('') || !isAbledTOS;

  const onSubmit = async () => {
    const formErrors = isFormValidate();
    if (!formErrors.includes('')) {
      signUpMutate(userInput);
    }
  };

  return (
    <Layout>
      <Header>{GNB_SVG.logo}</Header>
      <Title>회원 가입</Title>
      <Container>
        <SignUpForm userInputDispatch={userInputDispatch} isError={isError} userInput={userInput} setError={setError} />
        <SignUpTOS selectedTOS={selectedTOS} setSelectedTOS={setSelectedTOS} isAllChecked={isAllChecked} />
        <ButtonContainer>
          <Button title="회원가입" buttonSize="buttonL" buttonColor="white" onButtonClick={onSubmit} isDisabled={isDisabledSubmit} borderRadius={'24px'} />
        </ButtonContainer>
      </Container>
    </Layout>
  );
};

export default SignUp;

const Layout = styled.div`
  background-color: ${({ theme }) => theme.colors.gray30};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 150px 0;
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 26px 75px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 100;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.07));
`;

const Title = styled.h1`
  margin-bottom: 42px;
  width: 569.68px;
  text-align: left;
`;

const Container = styled.div`
  width: 500px;
  background: #ffffff;
  padding: 42px;
  border-radius: 24px;
  display: flex;
  margin: auto;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
