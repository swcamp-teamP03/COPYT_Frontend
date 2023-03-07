import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/common/Button';
import LabelInput from '../components/common/LabelInput';
import { ErrorMessage } from '../components/common/LabelInput/LabelInput.styles';
import { SIGNIN_MESSAGE } from '../constants/authMessage';
import useError from '../hooks/useError';
import useForm from '../hooks/useForm';
import useSignInMutation from '../quries/Auth/useSignInMutation';

const SignIn = () => {
  const navigate = useNavigate();
  const [{ email, password }, _, handleChange] = useForm({
    email: '',
    password: '',
  });
  const [isError, setError] = useError({
    signIn: false,
  });

  const { mutate } = useSignInMutation(setError);

  const isDisabled = !email || !password;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate({ email, password });
  };

  return (
    <Container>
      <Title>로그인</Title>
      <form onSubmit={onSubmit}>
        <LabelInput labelTitle="이메일" placeholder="이메일을 입력해주세요." name="email" value={email} onChange={handleChange} />
        <LabelInput labelTitle="비밀번호" placeholder="비밀번호를 입력해주세요." name="password" value={password} onChange={handleChange} type="password" />
        {isError.signIn && <ErrorMessage>* {SIGNIN_MESSAGE.SIGN_IN}</ErrorMessage>}
        <Footer>
          <Button buttonColor="black" buttonSize="buttonL" onButtonClick={() => {}} title="로그인" borderRadius="15px" type="submit" isDisabled={isDisabled} />
        </Footer>
      </form>
    </Container>
  );
};

export default SignIn;

const Container = styled.div`
  width: 382px;
  height: 500px;
  margin: auto;
  margin-top: 150px;
  form {
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.h1`
  margin-bottom: 42px;
`;

const Footer = styled.div`
  margin-top: 42px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
