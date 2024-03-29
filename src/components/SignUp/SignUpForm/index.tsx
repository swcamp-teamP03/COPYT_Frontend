import React, { Dispatch, useState, useEffect, useRef } from 'react';
import { SIGNUP_MESSAGE } from '../../../constants/authMessage';
import usePopUp from '../../../hooks/PopUp/usePopUp';
import useConfirmEmailMutation from '../../../quries/Auth/useConfirmEmailMutation';
import useSendMailMutation from '../../../quries/Auth/useSendMailMutation';
import isEmailValidate from '../../../utils/isEmailValidate';
import Button from '../../common/Button';
import LabelInput from '../../common/LabelInput';
import HoverQuestion from '../../DetailCampaign/Analysis/HoverQuestion';
import { SignUpAction, SignUpInit } from '../SignupReducer';
import * as S from './SignUpForm.styles';

interface SignUpFormProps {
  userInputDispatch: Dispatch<SignUpAction>;
  userInput: SignUpInit;
  setError: <P extends 'email' | 'password' | 'passwordCheck' | 'phoneNumber' | 'company' | 'username'>(target: P, message: string) => string;
  isError: { email: string; password: string; passwordCheck: string; company: string; phoneNumber: string; username: string; certification: string };
}

const SignUpForm = ({ userInputDispatch, isError, userInput, setError }: SignUpFormProps) => {
  const [certification, setCertification] = useState(false); // 인증 버튼
  const [certificationNumber, setCertificationNumber] = useState(''); //인증번호
  const [timer, setTimer] = useState(300); //초기 시간
  const [isTimeOver, setIsTimeOver] = useState(false); //시간초과
  const intervalRef = useRef<number | null>(null);
  const [disable, setDisable] = useState(false);
  const { openPopup, closePopup } = usePopUp();
  const { email, password, passwordCheck, phoneNumber, username, company } = userInput;

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'certificationNumber':
        setCertificationNumber(value);
        break;
      case 'phoneNumber':
        const newPhoneNumber = value.replace(/[^0-9]/g, '');
        const formattedPhoneNumber = /^010\d*$/.test(newPhoneNumber) ? newPhoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3') : newPhoneNumber;
        userInputDispatch({ type: 'CHANGE_INPUT', key: name, value: formattedPhoneNumber });
        break;
      default:
        userInputDispatch({ type: 'CHANGE_INPUT', key: name, value });
        break;
    }
  };

  const onConfirmEmailSuccess = () => {
    userInputDispatch({ type: 'CERTIFICATION', key: 'certificaiton', value: true });
    setCertification(false);
    setDisable(true);
    setIsTimeOver(false);
  };

  const onSendEmailSuccess = () => {
    setCertification(true);
    setIsTimeOver(false);
    setTimer(300);
  };

  const { mutate: sendMailMutate } = useSendMailMutation({ onSendEmailSuccess });
  const { mutate: confirmEmailMutate } = useConfirmEmailMutation({ onConfirmEmailSuccess });

  const handleSendEmail = () => {
    const inValidate = isEmailValidate(email);
    if (!inValidate) {
      sendMailMutate(email);
    }
    setError('email', inValidate);
  };

  const handleResendEmail = () => {
    setIsTimeOver(false);
    setDisable(false);
    handleSendEmail();
  };

  const handleEmailConfirm = () => {
    if (!certificationNumber.trim()) {
      return openPopup({
        message: '인증번호를 입력해 주세요.',
        confirmText: '확인',
        handleClose: closePopup,
        handleConfirm: closePopup,
      });
    }
    confirmEmailMutate({ email, certificationNumber });
  };

  useEffect(() => {
    if (certification && timer > 0) {
      intervalRef.current = window.setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    }

    if (timer === 0) {
      setIsTimeOver(true);
    }
    if (certification && isTimeOver) {
      clearInterval(intervalRef.current as number);
      setCertification(false);
      setIsTimeOver(false);
    }

    return () => clearInterval(intervalRef.current as number);
  }, [certification, timer, isTimeOver]);

  const minutes = Math.floor(timer / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (timer % 60).toString().padStart(2, '0');

  return (
    <>
      <S.FlexRover>
        <LabelInput
          labelTitle="ID(이메일)"
          placeholder="copyt@gmail.com"
          name="email"
          onChange={handleUserInput}
          value={email}
          errorMessage={isError.email ? isError.email : isError.certification ? isError.certification : ''}
          disabled={disable}
          marginBottom="0px"
          maxLength={24}
        />
        <S.LabelButton>
          <Button title={certification ? '재인증' : '인증'} buttonColor="white" buttonSize="buttonS" onButtonClick={certification ? handleResendEmail : handleSendEmail} />
        </S.LabelButton>
      </S.FlexRover>
      {certification && (
        <S.TimerContainer>
          인증 제한시간 <span>{`${minutes}:${seconds}`}</span>
        </S.TimerContainer>
      )}
      {certification && (
        <S.ClientBox>
          <S.FlexRover>
            <LabelInput
              labelTitle="인증번호"
              placeholder="인증번호를 입력해주세요."
              name="certificationNumber"
              value={certificationNumber}
              onChange={handleUserInput}
              errorMessage={isError.email}
              marginBottom="0px"
            />
            <S.LabelButton>
              <Button title="확인" buttonColor="blue" buttonSize="buttonS" type="button" onButtonClick={handleEmailConfirm} />
            </S.LabelButton>
          </S.FlexRover>
          <S.Relative>
            <span>인증번호가 오지 않나요?</span>
            <HoverQuestion text={'메일이 스팸 메일로 분류된 것은 아닌지 확인해 주세요.\n스팸 메일함에도 메일이 없다면, 다시 한 번 "인증" 버튼을 눌러주세요.'} />
          </S.Relative>
        </S.ClientBox>
      )}
      <S.FlexRow>
        <LabelInput
          labelTitle="브랜드(기업)명"
          placeholder="브랜드(기업)명을 입력해주세요."
          name="company"
          onChange={handleUserInput}
          value={company}
          errorMessage={isError.company}
          maxLength={24}
        />

        <LabelInput
          labelTitle="담당자명"
          placeholder="담당자를 입력해주세요."
          name="username"
          value={username}
          onChange={handleUserInput}
          errorMessage={isError.username}
          maxLength={24}
        />
      </S.FlexRow>
      <LabelInput
        labelTitle="전화번호"
        placeholder="010-1234-1234"
        value={phoneNumber}
        maxLength={13}
        name="phoneNumber"
        onChange={handleUserInput}
        errorMessage={isError.phoneNumber}
        hover={'문자발송 테스트 시 수신번호로 사용됩니다.'}
      />
      <LabelInput
        labelTitle="비밀번호"
        placeholder="영문,숫자,특수문자 포함 총 8자리 이상"
        name="password"
        type="password"
        value={password}
        onChange={handleUserInput}
        errorMessage={isError.password ? isError.password : isError.passwordCheck ? isError.passwordCheck : ''}
        maxLength={24}
        desc={SIGNUP_MESSAGE.PASSWORD_DESC}
      />
      <LabelInput
        labelTitle="비밀번호 재입력"
        placeholder="영문,숫자,특수문자 포함 총 8자리 이상"
        name="passwordCheck"
        type="password"
        value={passwordCheck}
        onChange={handleUserInput}
        errorMessage={isError.password ? isError.password : isError.passwordCheck ? isError.passwordCheck : ''}
        maxLength={24}
        desc={SIGNUP_MESSAGE.PASSWORD_DESC}
      />
    </>
  );
};

export default SignUpForm;
