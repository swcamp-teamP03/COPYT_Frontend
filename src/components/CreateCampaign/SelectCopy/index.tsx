import React from 'react';
import Button from '../../common/Button';
import MessageContainer from '../MessageContainer';
import * as S from './SelectCopy.stlyes';

const SelectCopy = () => {
  return (
    <>
      <S.FlexBox>
        <S.Title>
          카피 선택
          <span>*</span>
        </S.Title>
        <Button buttonColor="black" buttonSize="buttonM" title="카피 불러오기" />
      </S.FlexBox>
      <MessageContainer />
      <S.Title>
        메시지 발송 URL
        <span>*</span>
      </S.Title>
      <S.FlexBox>
        <S.URLInput placeholder="링크를 입력해 주세요." />
        <Button title="단축 URL 생성" buttonColor="black" buttonSize="buttonM" />
      </S.FlexBox>
    </>
  );
};

export default SelectCopy;
