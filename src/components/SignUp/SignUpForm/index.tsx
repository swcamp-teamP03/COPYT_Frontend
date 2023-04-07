import React, { Dispatch, useState } from 'react';
import { sendEmail, confirmEmail } from '../../../api/Auth/signUp';
import { SIGNUP_MESSAGE } from '../../../constants/authMessage';
import useError from '../../../hooks/useError';
import Button from '../../common/Button';
import LabelInput from '../../common/LabelInput';
import { SignUpAction, SignUpInit } from '../SignupReducer';
import * as S from './SignUpForm.styles';

interface SignUpFormProps {
  userInputDispatch: Dispatch<SignUpAction>;
  isError: { email: boolean; password: boolean; passwordCheck: boolean; company: boolean; phoneNumber: boolean; username: boolean };
}

const SignUpForm = ({ userInputDispatch, isError }: SignUpFormProps) => {
  const [email, setEmail] = useState('');
  const [certification, setCertification] = useState(false);
  const [number, setNumber] = useState(0);

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    userInputDispatch({ type: 'CHANGE_INPUT', key: name, value });
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'certificationNumber') {
      setNumber(parseInt(value));
    }
  };

  const handleSendEmail = async () => {
    const result = await sendEmail(email);
    if (result) {
      console.log('이메일 전송 완료');
    }
    setCertification(true);
  };

  const handleConfirmation = async () => {
    const result = await confirmEmail(email, number);
    if (result) {
      console.log('이메일 전송 완료');
    }
    setCertification(false);
  };

  return (
    <div>
      <S.Title>회원 가입</S.Title>

      <S.FlexRover>
        <LabelInput labelTitle="ID(이메일)" placeholder="이메일을 입력해주세요." name="email" onChange={handleUserInput} errorMessage={isError.email ? SIGNUP_MESSAGE.EMAIL : ''} />
        <Button title="인증" buttonColor="white" buttonSize="buttonS" onButtonClick={handleSendEmail} />
      </S.FlexRover>
      {certification && (
        <S.FlexRover>
          <LabelInput
            labelTitle="인증번호"
            placeholder="인증번호를 입력해주세요."
            name="certificationNumber"
            onChange={handleUserInput}
            errorMessage={isError.email ? SIGNUP_MESSAGE.EMAIL : ''}
          />
          <Button title="확인" buttonColor="white" buttonSize="buttonS" type="button" />
        </S.FlexRover>
      )}

      <S.FlexRow>
        <LabelInput
          labelTitle="브랜드(기업)명"
          placeholder="브랜드(기업)명을 입력해주세요."
          name="company"
          onChange={handleUserInput}
          errorMessage={isError.company ? SIGNUP_MESSAGE.BRAND : ''}
        />

        <LabelInput
          labelTitle="담당자명"
          placeholder="담당자를 입력해주세요."
          name="username"
          onChange={handleUserInput}
          errorMessage={isError.username ? SIGNUP_MESSAGE.PERSON : ''}
        />
      </S.FlexRow>
      <LabelInput
        labelTitle="전화번호"
        placeholder="( - )를 제외한 전화번호를 입력해주세요."
        name="mainPhoneNumber"
        onChange={handleUserInput}
        errorMessage={isError.phoneNumber ? SIGNUP_MESSAGE.PHONENUMBER : ''}
      />
      <LabelInput
        labelTitle="비밀번호"
        placeholder="영문,숫자,특수문자 포함 총 8자리"
        name="password"
        type="password"
        onChange={handleUserInput}
        errorMessage={isError.password ? SIGNUP_MESSAGE.PASSWORD : isError.passwordCheck ? SIGNUP_MESSAGE.PASSWORD_MATCH : ''}
      />
      <LabelInput
        labelTitle="비밀번호 재입력"
        placeholder="영문,숫자,특수문자 포함 총 8자리"
        name="passwordCheck"
        type="password"
        onChange={handleUserInput}
        errorMessage={isError.password ? SIGNUP_MESSAGE.PASSWORD : isError.passwordCheck ? SIGNUP_MESSAGE.PASSWORD_MATCH : ''}
      />
    </div>
  );
};

export default SignUpForm;
