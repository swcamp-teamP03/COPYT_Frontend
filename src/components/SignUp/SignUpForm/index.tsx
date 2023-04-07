import React, { Dispatch, useState, useEffect, useRef } from 'react';
import { sendEmail, confirmEmail } from '../../../api/Auth/signUp';
import { SIGNUP_MESSAGE } from '../../../constants/authMessage';
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
  const [timer, setTimer] = useState<number>(180);
  const [isTimeOver, setIsTimeOver] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (certification && timer > 0) {
      intervalRef.current = window.setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    }
    return () => clearInterval(intervalRef.current as number);
  }, [certification, timer]);

  useEffect(() => {
    if (timer === 0) {
      setIsTimeOver(true);
    }
    if (certification && isTimeOver) {
      clearInterval(intervalRef.current as number);
      setCertification(false);
      setIsTimeOver(false);
    }
  }, [timer, certification, isTimeOver]);

  const minutes = Math.floor(timer / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (timer % 60).toString().padStart(2, '0');

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
    setIsTimeOver(false);
    setTimer(180);
  };

  const handleConfirmation = async () => {
    const result = await confirmEmail(email, number);
    if (result) {
      console.log('인증이 완료 되었습니다.');
      setCertification(false);
    }
    setIsTimeOver(false);
  };

  const handleResendEmail = () => {
    setIsTimeOver(false);
    handleSendEmail();
  };

  return (
    <div>
      <S.Title>회원 가입</S.Title>

      <S.FlexRover>
        <LabelInput
          labelTitle="ID(이메일)"
          placeholder="이메일을 입력해주세요."
          name="email"
          onChange={handleUserInput}
          errorMessage={isError.email ? SIGNUP_MESSAGE.EMAIL : ''}
          disabled={certification}
        />
        {certification ? (
          <Button title="재인증" buttonColor="white" buttonSize="buttonS" onButtonClick={handleResendEmail} />
        ) : (
          <Button title="인증" buttonColor="white" buttonSize="buttonS" onButtonClick={handleSendEmail} />
        )}
      </S.FlexRover>
      {certification && (
        <S.ClientBox>
          <S.FlexRover>
            <LabelInput
              labelTitle="인증번호"
              placeholder="인증번호를 입력해주세요."
              name="certificationNumber"
              onChange={handleUserInput}
              errorMessage={isError.email ? SIGNUP_MESSAGE.EMAIL : ''}
            />
            <Button title="확인" buttonColor="white" buttonSize="buttonS" type="button" onButtonClick={handleConfirmation} />
          </S.FlexRover>
          <S.TimerContainer> 인증 제한시간 {`${minutes}:${seconds}`}</S.TimerContainer>
        </S.ClientBox>
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
