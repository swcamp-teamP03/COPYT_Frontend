import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GNB_SVG } from '../assets/GNB';
import { VALIDATE } from '../assets/Validate';
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

  const { mutate: signInMutate } = useSignInMutation(setError);

  const isDisabled = !email || !password;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signInMutate({ email, password });
  };

  const goSignup = () => {
    navigate('/auth/signup');
  };

  return (
    <Layout>
      <Logo>
        <span>올인원 문자 CRM 솔루션</span>
        <div>{GNB_SVG.logo}</div>
      </Logo>
      <FormContainer>
        <Title>로그인</Title>
        <form onSubmit={onSubmit}>
          <LabelInput labelTitle="이메일" placeholder="이메일을 입력해주세요." name="email" value={email} onChange={handleChange} />
          <LabelInput labelTitle="비밀번호" placeholder="비밀번호를 입력해주세요." name="password" value={password} onChange={handleChange} type="password" />
          <SignupForm>
            아직 회원이 아니신가요? <span onClick={goSignup}>회원가입</span>
          </SignupForm>
          {isError.signIn && (
            <ErrorMessage>
              {VALIDATE.false} {SIGNIN_MESSAGE.SIGN_IN}
            </ErrorMessage>
          )}
          <Footer>
            <Button buttonColor="white" buttonSize="buttonL" title="로그인" borderRadius="15px" type="submit" isDisabled={isDisabled} />
          </Footer>
        </form>
      </FormContainer>
    </Layout>
  );
};

export default SignIn;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin: auto;
  gap: 50px;
  background-color: ${({ theme }) => theme.colors.gray30};
  padding: 100px 0;
`;

const Logo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    color: ${({ theme }) => theme.colors.blue40};
    font-size: 14px;
  }
`;

const FormContainer = styled.div`
  width: 370px;
  margin: 0 auto;
  padding: 70px 90px;
  background: #ffffff;
  border-radius: 24px;
  form {
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.h1`
  margin-bottom: 42px;
`;

const SignupForm = styled.span`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  span {
    color: ${({ theme }) => theme.colors.blue30};
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Footer = styled.div`
  margin-top: 42px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
