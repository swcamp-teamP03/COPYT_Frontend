import React, { Dispatch } from 'react';
import { SIGNUP_MESSAGE } from '../../../constants/signUpMessage';
import useError from '../../../hooks/useError';
import LabelInput from '../../common/LabelInput';
import { SignUpAction } from '../SignupReducer';
import * as S from './SignUpForm.styles';

interface SignUpFormProps {
  userInputDispatch: Dispatch<SignUpAction>;
  isError: { email: boolean; password: boolean; passwordCheck: boolean; managerPhoneNumber: boolean; mainPhoneNumber: boolean };
}

const SignUpForm = ({ userInputDispatch, isError }: SignUpFormProps) => {
  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    userInputDispatch({ type: 'CHANGE_INPUT', key: name, value });
  };

  return (
    <form>
      <S.Title>회원 가입</S.Title>
      <LabelInput labelTitle="ID(이메일)" placeholder="이메일을 입력해주세요." name="email" onChange={handleUserInput} errorMessage={isError.email ? SIGNUP_MESSAGE.EMAIL : ''} />
      <S.FlexRow>
        <LabelInput labelTitle="브랜드(기업)명" placeholder="브랜드(기업)명을 입력해주세요." name="brandName" onChange={handleUserInput} />
        <LabelInput labelTitle="담당자명" placeholder="담당자를 입력해주세요." name="manager" onChange={handleUserInput} />
      </S.FlexRow>
      <LabelInput
        labelTitle="담당자 전화번호"
        placeholder="( - )를 제외한 전화번호를 입력해주세요."
        name="managerPhoneNumber"
        onChange={handleUserInput}
        errorMessage={isError.managerPhoneNumber ? SIGNUP_MESSAGE.PHONENUMBER : ''}
      />
      <LabelInput
        labelTitle="대표 전화번호"
        placeholder="( - )를 제외한 전화번호를 입력해주세요."
        name="mainPhoneNumber"
        onChange={handleUserInput}
        errorMessage={isError.mainPhoneNumber ? SIGNUP_MESSAGE.PHONENUMBER : ''}
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
        labelTitle="비밀번호 확인"
        placeholder="영문,숫자,특수문자 포함 총 8자리"
        name="passwordCheck"
        type="password"
        onChange={handleUserInput}
        errorMessage={isError.password ? SIGNUP_MESSAGE.PASSWORD : isError.passwordCheck ? SIGNUP_MESSAGE.PASSWORD_MATCH : ''}
      />
    </form>
  );
};

export default SignUpForm;
