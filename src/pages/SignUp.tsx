import React, { useReducer } from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import SignUpForm from '../components/SignUp/SignUpForm';
import { signupInit, singUpReducer } from '../components/SignUp/SignupReducer';
import SignUpTOS from '../components/SignUp/TOS';

const SignUp = () => {
  const [userInput, userInputDispatch] = useReducer(singUpReducer, signupInit);

  return (
    <Container>
      <SignUpForm userInputDispatch={userInputDispatch} />
      <SignUpTOS />
      <Button title="회원가입" buttonSize="buttonL" buttonColor="black" />
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
