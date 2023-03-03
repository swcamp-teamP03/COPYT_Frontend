import React, { Dispatch } from 'react';
import LabelInput from '../../common/LabelInput';
import { SignUpAction } from '../SignupReducer';
import * as S from './SignUpForm.styles';

interface SignUpFormProps {
  userInputDispatch: Dispatch<SignUpAction>;
}

const SignUpForm = ({ userInputDispatch }: SignUpFormProps) => {

  

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    userInputDispatch({ type: 'CHANGE_INPUT', key: name, value });
  };

  return (
    <form>
      <S.Title>회원 가입</S.Title>
      <LabelInput labelTitle="ID(이메일)" placeholder="이메일을 입력해주세요." name="email" onChange={handleUserInput} />
      <S.FlexRow>
        <LabelInput labelTitle="브랜드(기업)명" placeholder="브랜드(기업)명을 입력해주세요." name="brandName" />
        <LabelInput labelTitle="담당자명" placeholder="담당자를 입력해주세요." name="manager" isRequire={false} />
      </S.FlexRow>
      <LabelInput labelTitle="담당자 전화번호" placeholder="( - )를 제외한 전화번호를 입력해주세요." name="managerPhoneNumber" />
      <LabelInput labelTitle="대표 전화번호" placeholder="( - )를 제외한 전화번호를 입력해주세요." name="mainPhoneNumber" />
      <LabelInput labelTitle="비밀번호" placeholder="영문,숫자,특수문자 포함 총 8자리" name="empasswordail" />
      <LabelInput labelTitle="비밀번호 확인" placeholder="영문,숫자,특수문자 포함 총 8자리" name="passwordCheck" />
    </form>
  );
};

export default SignUpForm;
